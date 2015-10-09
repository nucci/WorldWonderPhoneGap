var Wonders = (function(Wonders){
	var baseUrl = "https://api.parse.com/1/";

	var invokeOperation = function(endpoint, method, operationParameters, successCallback, failureCallback) {
		var doRequest = function(sessionString){
            var token;
            if(!!sessionString){
                var session;

                try {
                    session = JSON.parse(sessionString);
                }
                catch(err) {
                    console.log("Catch Error :" + err);
                }
                finally {
                    if(typeof session === "object" &&
                        session.hasOwnProperty("sessionToken")){
                        token = session["sessionToken"];
                    }
                }
            }

            var http = new XMLHttpRequest();
            var url = baseUrl + endpoint;
            var params = JSON.stringify(operationParameters);

            http.open(method, url, true);

            http.setRequestHeader("Content-type", "application/json");
            http.setRequestHeader("X-Parse-Application-Id", "xf4nl2pBvNEkGADXxuN8yLzRchlvTqBoOWV2oCg0");
            http.setRequestHeader("X-Parse-REST-API-Key", "ZdZ40VdqX1SJyUoGMvJOYWAnw53zyhjsFlXfF2Rh");

            if(token) {
                http.setRequestHeader("X-Parse-Session-Token", token);
            }

            http.onreadystatechange = function() {
                if(http.readyState == 4) {
                    if (http.status == 200 || http.status == 201) {
                        if (successCallback) {
                            successCallback(JSON.parse(http.responseText));
                        }
                    } else {
                        var error = JSON.parse(http.responseText);
                        if (error &&
                            error.hasOwnProperty("code") &&
                            error.hasOwnProperty("error")) {
                            failureCallback(error.code, error.error);
                        } else {
                            failureCallback(http.status, http.responseText);
                        }
                    }
                }
            };
            http.send(params);
        };

        getSession(doRequest);
    };

	var getSession = function(callback) {
        Wonders.plugins.storage.get("currentSession", callback, callback);

		return null;
	};

	Wonders.services = Wonders.services || {};
	Wonders.services._invokeOperation = invokeOperation;
	return Wonders;
}(Wonders || {}));