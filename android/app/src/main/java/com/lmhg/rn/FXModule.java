package com.lmhg.rn;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.lmhg.util.HttpUtil.request;

/**
 * Created by tao on 2017/6/12.
 */

public class FXModule extends ReactContextBaseJavaModule implements Application.ActivityLifecycleCallbacks {

    public FXModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FX";
    }


    @ReactMethod
    public void login(String userName, String password, Promise promise){
        try{
            WritableMap map = Arguments.createMap();
            promise.resolve(this.getCookies("https://www.phimall.com/passport-post_login.html",
                    "uname=13392619771&password=a871124","X-Requested-With:XMLHttpRequest##User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
            ,"","POST","UTF-8",8000));
        }catch(IllegalViewOperationException e){
            promise.reject("code","登录失败！");
        }
    }

    public static WritableMap getCookies(String urlPath, String params, String requestHeader, String cookie, String requestType, String charset, int timeOut){
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


    @Override
    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {

    }

    @Override
    public void onActivityStarted(Activity activity) {

    }

    @Override
    public void onActivityResumed(Activity activity) {

    }

    @Override
    public void onActivityPaused(Activity activity) {

    }

    @Override
    public void onActivityStopped(Activity activity) {

    }

    @Override
    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {

    }

    @Override
    public void onActivityDestroyed(Activity activity) {

    }
}