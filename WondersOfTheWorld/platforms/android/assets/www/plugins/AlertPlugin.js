var Wonders = (function(Wonders, cordova){

    var alert = {
        "show" : function(title, message) {
            if(cordova && typeof cordova.exec === "function") {
                cordova.exec(null, null, "Alert", "show", [title, message]);
            } else {
                if(typeof errorCallback === "function") errorCallback("Cordova is not Defined");
            }
        }
    };

    Wonders.plugins = Wonders.plugins || {};
    Wonders.plugins.alert = alert;
    return Wonders;
}(Wonders || {}, (typeof cordova != "undefined") ? cordova : null ));