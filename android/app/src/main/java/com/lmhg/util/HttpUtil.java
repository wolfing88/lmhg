package com.lmhg.util;

import android.os.Bundle;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.GZIPInputStream;

/**
 * Created by Kwon on 2018/6/4.
 */

public class HttpUtil {


    public static WritableMap getCookies(String urlPath,String params,String requestHeader, String cookie,String requestType,String charset,int timeOut){
        WritableMap resMap = Arguments.createMap();
        Map<String,Object> map = request(urlPath,params,requestHeader,cookie,requestType,charset,timeOut);
        if(map.get("result").toString().contains("success")){
            Map<String, List<String>> heads = (Map<String, List<String>>)map.get("headerFields");
            List<String> list = heads.get("Set-Cookie");
            String cookies = "";
            for (String str : list) {
                cookies += str.substring(0, str.indexOf(";") + 1);
            }
            if(cookies.contains("_SID")){
                resMap.putString("code", "success");
                resMap.putString("result", cookies);
                return resMap;
            }else{
                return getCookies(urlPath,params,requestHeader,cookies,requestType,charset,timeOut);
            }
        }else{
            resMap.putString("code", "error");
            resMap.putString("result", map.get("result").toString());
            return resMap;
        }
    }


    public static Map<String,Object> request(String urlPath,String params,String requestHeader, String cookie,String requestType,String charset,int timeOut){
        BufferedReader br = null;
        InputStream in = null;
        OutputStream os = null;

        Map<String,Object> map = new HashMap<String, Object>();
        try {
            URL url = new URL(urlPath);
            // 获得连接对象
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            // 设置属性
            connection.setRequestMethod(requestType);
            connection.setReadTimeout(timeOut);
            connection.setConnectTimeout(timeOut);
            // 设置输入流和输出流,都设置为true
            connection.setDoOutput(true);
            connection.setDoInput(true);
            connection.setRequestProperty("Cookie", cookie);
            //设置请求头
            if(null!=requestHeader && requestHeader.length()>0){
                String[] rehs =  requestHeader.split("##");
                for (int i = 0; i < rehs.length; i++) {
                    connection.setRequestProperty(rehs[i].substring(0, rehs[i].indexOf(":")), rehs[i].substring(rehs[i].indexOf(":")+1,rehs[i].length()));
                }
            }
            // 把提交的数据以输出流的形式提交到服务器
            if(null!=params && params.length()>0){
                os = connection.getOutputStream();
                os.write(params.getBytes(charset));
                os.flush();
            }
            // 通过响应码来判断是否连接成功
            if (connection.getResponseCode() == 200) {
                String result = "";
                if(requestHeader.contains("gzip")){
                    in = new GZIPInputStream(connection.getInputStream());
                    br = new BufferedReader(new InputStreamReader(in, charset));
                    String line;
                    while ((line = br.readLine()) != null) {
                        result += line;
                    }
                }else{
                    in = connection.getInputStream();
                    ByteArrayOutputStream outStream = new ByteArrayOutputStream();
                    byte[] buffer = new byte[1024];
                    while (true)
                    {
                        int i = in.read(buffer);
                        if (i == -1)
                            break;
                        outStream.write(buffer, 0, i);
                    }
                    byte[] buffer2 = outStream.toByteArray();
                    result = new String(buffer2, charset);
                }
                map.put("code","success");
                map.put("headerFields", connection.getHeaderFields());
                map.put("result", result);
                map.put("responseMessage", connection.getResponseMessage());
            }else if(connection.getResponseCode() == 302){
                String location = connection.getHeaderField("Location");
                return request(location, params, requestHeader, cookie, requestType,charset, timeOut);
            }else{
                map.put("code","error");
                map.put("result",connection.getResponseCode());
            }
            return map;
        } catch (Exception e) {
            map.put("code","error");
            map.put("result",e.getMessage());
            return map;
        }finally{
            try {
                if (in != null) {
                    in.close();
                }
            } catch (IOException e) {
            }
            try {
                if (os != null) {
                    os.close();
                }
            } catch (IOException e) {
            }
            try {
                if (br != null) {
                    br.close();
                }
            } catch (IOException e) {
            }
        }
    }
}
