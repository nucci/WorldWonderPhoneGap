package com.ciandt.wondersoftheworld.plugins;


import android.app.Activity;
import android.content.Intent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class FlowManagerPlugin extends CordovaPlugin{

    @Override
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {

        final CordovaInterface ci = this.cordova;
        if ("present".equals(action)) {
            this.present(args, ci, callbackContext);
        } else if ("dismiss".equals(action)) {
            this.dismiss(args, ci, callbackContext);
        } else {
            callbackContext.error("Error method not found");
        }

        return true;
    }

    /**
     * Instantiate and start new activity by reflection, and send JSONObject
     * controller data
     *
     * @param args
     *            Cordova JSONArray Arguments
     * @param ci
     *            Cordova Interface
     * @param callbackContext
     *            Cordova Callback Context
     */
    private void present(final JSONArray args, final CordovaInterface ci,
                         final CallbackContext callbackContext) {
        boolean result = false;
        String resultMessage = "Operation Completed Successfully";

        String activityName;
        try {
            activityName = args.getString(0);
            
            String packageName = ci.getActivity().getPackageName();

            String newActivityName = packageName + "." + activityName
                    + "Activity";
            Class<?> activityClass;
            Intent targetActivityIntent = null;

            activityClass = Class.forName(newActivityName);

            targetActivityIntent = new Intent(ci.getActivity(), activityClass);
 
            // Navigating to the target activity
            ci.getActivity().startActivityForResult(targetActivityIntent, 0);
            result = true;
        } catch (JSONException jsone) {
            jsone.printStackTrace();
            result = false;
            resultMessage = "Invalid Parameters.";
        } catch (ClassNotFoundException cnfe) {
            cnfe.printStackTrace();
            result = false;
            resultMessage = "Invalid activity name.";
        } finally {
            if (result) {
                callbackContext.success(resultMessage);
            } else {
                callbackContext.error(resultMessage);
            }
        }
    }

    /**
     * Finish current Activity and send current controller data back to results
     * activity
     *
     * @param args
     *            Cordova JSONArray Arguments
     * @param ci
     *            Cordova Interface
     * @param callbackContext
     *            Cordova Callback Context
     */
    private void dismiss(final JSONArray args, final CordovaInterface ci,
                         final CallbackContext callbackContext) {
        String resultMessage = "Operation Completed Successfully";
        Intent resultIntent = new Intent();
        ci.getActivity().setResult(Activity.RESULT_OK, resultIntent);
        ci.getActivity().finish();

        callbackContext.success(resultMessage);
    }
}
