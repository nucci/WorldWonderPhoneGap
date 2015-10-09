package com.ciandt.wondersoftheworld.plugins;


import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.ciandt.wondersoftheworld.BaseCordovaActivity;

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
        } else if ("retrieveControllerData".equals(action)) {
            this.retrieveControllerData(ci, callbackContext);
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
        Boolean killHistory;
        JSONObject controllerData;
        try {
            activityName = args.getString(0);
            killHistory = args.getBoolean(1);
            controllerData = args.getJSONObject(2);

            String packageName = ci.getActivity().getPackageName();

            String newActivityName = packageName + "." + activityName
                    + "Activity";
            Class<?> activityClass;
            Intent targetActivityIntent = null;
            activityClass = Class.forName(newActivityName);

            targetActivityIntent = new Intent(ci.getActivity(), activityClass);
            targetActivityIntent.putExtra("controllerData", controllerData.toString());
            if (killHistory) {
                targetActivityIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
            }

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
     * Finish current Activity and send current
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

    /**
     * Send back to Javascript Context Controller Data JSONObject
     *
     * @param ci
     *            Cordova Interface
     * @param callbackContext
     *            Cordova Callback Context
     */
    private void retrieveControllerData(final CordovaInterface ci,
                                        final CallbackContext callbackContext) {
        BaseCordovaActivity activityReference = (BaseCordovaActivity) ci
                .getActivity();
        callbackContext.success(activityReference.getControllerData());

        Log.d(">>>", "SENT CONTROLLER DATA: "
                + activityReference.getControllerData().toString());
    }
}
