package com.ciandt.wondersoftheworld.plugins;

import android.content.Context;
import android.content.SharedPreferences;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;


public class StoragePlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {

        final CordovaInterface ci = this.cordova;
        if ("get".equals(action)) {
            this.get(args, ci, callbackContext);
        } else if ("set".equals(action)) {
            this.set(args, ci, callbackContext);
        } else if ("remove".equals(action)) {
            this.remove(args, ci, callbackContext);
        } else {
            callbackContext.error("Error method not found");
        }

        return true;
    }

    private void get(final JSONArray args, final CordovaInterface ci,
                         final CallbackContext callbackContext) {

        String key;
        String value = "";
        try {
            key = args.getString(0);
            SharedPreferences sharedPref = ci.getActivity().getPreferences(Context.MODE_PRIVATE);
            value = sharedPref.getString(key, "");
        } catch (JSONException e) {
            e.printStackTrace();
        } finally {
            callbackContext.success(value);
        }
    }

    private void set(final JSONArray args, final CordovaInterface ci,
                     final CallbackContext callbackContext) {

        String key;
        String value;
        try {
            key = args.getString(0);
            value = args.getString(1);

            SharedPreferences sharedPref = ci.getActivity().getPreferences(Context.MODE_PRIVATE);
            SharedPreferences.Editor editor = sharedPref.edit();
            editor.putString(key, value);
            editor.apply();

        } catch (JSONException e) {
            e.printStackTrace();
            callbackContext.error("Error during set Storage Plugin");
        } finally {
            callbackContext.success();
        }
    }

    private void remove(final JSONArray args, final CordovaInterface ci,
                     final CallbackContext callbackContext) {

        String key;
        try {
            key = args.getString(0);

            SharedPreferences sharedPref = ci.getActivity().getPreferences(Context.MODE_PRIVATE);
            SharedPreferences.Editor editor = sharedPref.edit();
            editor.remove(key);
            editor.apply();

        } catch (JSONException e) {
            e.printStackTrace();
            callbackContext.error("Error during remove Storage Plugin");
        } finally {
            callbackContext.success();
        }
    }
}
