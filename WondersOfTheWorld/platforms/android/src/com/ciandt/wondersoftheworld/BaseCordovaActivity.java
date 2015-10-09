package com.ciandt.wondersoftheworld;

import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebView;

import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewImpl;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewEngine;
import org.json.JSONException;
import org.json.JSONObject;

public class BaseCordovaActivity extends CordovaActivity {

    private JSONObject controllerData;

    public JSONObject getControllerData() {
        return controllerData;
    }

    public void setControllerData(JSONObject controllerData) {
        this.controllerData = controllerData;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (this.getIntent() != null
                && this.getIntent().getExtras() != null
                && this.getIntent().hasExtra("controllerData")) {
            try {
                this.controllerData = new JSONObject(this.getIntent()
                        .getExtras().getString("controllerData"));
            } catch (JSONException e) {
                e.printStackTrace();
                this.controllerData = null;
            }
        }
    }

    @Override
    protected CordovaWebView makeWebView() {
        SystemWebView systemWebView = (SystemWebView) findViewById(R.id.cordovaWebView);
        CordovaWebView webView = new CordovaWebViewImpl(new SystemWebViewEngine(systemWebView));
        return webView;
    }

    @Override
    protected void createViews() {

        if (preferences.contains("BackgroundColor")) {
            int backgroundColor = preferences.getInteger("BackgroundColor", Color.BLACK);
            // Background of activity:
            appView.getView().setBackgroundColor(backgroundColor);
        }

        appView.getView().requestFocusFromTouch();
    }

    protected void injectJavascript(String javascriptString) {
        String url = "javascript:".concat(javascriptString);
        appView.loadUrlIntoView(url,false);
    }
}
