package com.ciandt.wondersoftheworld;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewImpl;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewEngine;

public class LoginActivity extends BaseCordovaActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        loadUrl("file:///android_asset/www/view/login.html");

        SharedPreferences sharedPref = this.getSharedPreferences("wwprefs", Context.MODE_PRIVATE);
        String session = sharedPref.getString("currentSession", null);
        if(session != null){
            Intent intent = new Intent(this, WonderListActivity.class);
            this.startActivity(intent);
            this.finish();
        }
    }
}
