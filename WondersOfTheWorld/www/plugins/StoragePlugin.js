var Wonders = (function(Wonders, cordova){

    var storage = {
        "get" : function(key, successCallback, errorCallback) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(successCallback, errorCallback, "Storage", "get", [key]);
            } else {
                if(typeof errorCallback === "function") errorCallback("Cordova is not Defined");
            }
        },

        "set" : function(key, value, successCallback, errorCallback) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(successCallback, errorCallback, "Storage", "set", [key, value]);
            } else {
                if(typeof errorCallback === "function") errorCallback("Cordova is not Defined");
            }
        },

        "remove" : function(key, successCallback, errorCallback) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(successCallback, errorCallback, "Storage", "remove", [key]);
            } else {
                if(typeof errorCallback === "function") errorCallback("Cordova is not Defined");
            }
        }
    };

    Wonders.plugins = Wonders.plugins || {};
    Wonders.plugins.storage = storage;
    return Wonders;
}(Wonders || {}, (typeof cordova != "undefined") ? cordova : null));