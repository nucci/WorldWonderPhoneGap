package com.ciandt.wondersoftheworld.plugins;

import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class AlertPlugin  extends CordovaPlugin {

    @Override
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        final CordovaInterface ci = this.cordova;
        if ("show".equals(action)) {
            this.show(args, ci, callbackContext);
        } else {
            callbackContext.error("Error method not found");
        }

        return true;
    }

    private void show(final JSONArray args, final CordovaInterface ci,
                      final CallbackContext callbackContext) {
        String text;
        Boolean result = false;
        try {
            text = args.getString(0);
            Toast.makeText(ci.getActivity(), text, Toast.LENGTH_SHORT).show();
            result = true;
        } catch (JSONException e) {
            e.printStackTrace();
        } finally {
            if (result) {
                callbackContext.success();
            } else {
                callbackContext.error("Error during show AlertPlugin");
            }
        }
    }
}