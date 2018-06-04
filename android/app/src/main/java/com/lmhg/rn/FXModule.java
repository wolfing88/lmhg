package com.lmhg.rn;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.lmhg.util.HttpUtil;
import com.lmhg.util.IP;

/**
 * Created by tao on 2017/6/12.
 */

public class FXModule extends ReactContextBaseJavaModule implements Application.ActivityLifecycleCallbacks {

    private static ReactApplicationContext reactContext;

    public FXModule(ReactApplicationContext reactContext) {
        super(reactContext);
        FXModule.reactContext = reactContext;
    }


    @Override
    public String getName() {
        return "FX";
    }


    @ReactMethod
    public void login(final String userName,final String password,final Promise promise){
        new Thread() {
            @Override
            public void run() {
                WritableMap map = HttpUtil.getCookies(IP.FX_LOGIN,
                        "uname="+ userName +"&password="+ password ,"X-Requested-With:XMLHttpRequest##User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
                        ,"","POST","UTF-8",8000);
                promise.resolve(map);
            }}.start();
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