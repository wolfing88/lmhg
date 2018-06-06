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
import com.lmhg.util.HttpUtil;
import com.lmhg.util.IP;
import com.lmhg.util.Tools;

/**
 * Created by tao on 2017/6/12.
 */

public class LMModule extends ReactContextBaseJavaModule implements Application.ActivityLifecycleCallbacks {

    private static ReactApplicationContext reactContext;

    public LMModule(ReactApplicationContext reactContext) {
        super(reactContext);
        LMModule.reactContext = reactContext;
    }


    @Override
    public String getName() {
        return "LM";
    }


    @ReactMethod
    public void RC4encrypt(final String data,final String key,final Promise promise){
        WritableMap map = Arguments.createMap();
        map.putString("result",Tools.encry_RC4_string(data,key));
        promise.resolve(map);
    }

    @ReactMethod
    public void RC4decrypt(final String data,final String key,final Promise promise){
        WritableMap map = Arguments.createMap();
        map.putString("result",Tools.decry_RC4(data,key));
        promise.resolve(map);
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