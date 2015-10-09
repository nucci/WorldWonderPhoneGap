package com.ciandt.wondersoftheworld;

import android.os.Bundle;
import android.widget.Toolbar;

public class WonderDetailActivity extends BaseCordovaActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wonder_detail);
        loadUrl("file:///android_asset/www/view/wonderDetail.html");

        //Set a toolbar to replace the action bar.
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setActionBar(toolbar);
    }
}
