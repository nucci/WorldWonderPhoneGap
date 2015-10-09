var Wonders = (function(Wonders, cordova){

    var flowManager = {

        "present" : function(successCallback, errorCallback, className, killHistory, controllerData) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(successCallback, errorCallback, "FlowManager", "present", [className, killHistory, controllerData || {}]);
            } else {
                if(typeof errorCallback === "function") errorCallback("Cordova is not Defined");
            }
        },

        "dismiss" : function(successCallback, errorCallback) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(successCallback, errorCallback, "FlowManager", "dismiss", []);
            } else {
                if(typeof errorCallback === "function")errorCallback("Cordova is not Defined");
            }
        },

        "retrieveControllerData" : function(successCallback, errorCallback) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(successCallback, errorCallback, "FlowManager", "retrieveControllerData", []);
            } else {
                if(typeof errorCallback === "function")errorCallback("Cordova is not Defined");
            }
        }
    };

    Wonders.plugins = Wonders.plugins || {};
    Wonders.plugins.flowManager = flowManager;
    return Wonders;
}(Wonders || {}, (typeof cordova != "undefined") ? cordova : null));