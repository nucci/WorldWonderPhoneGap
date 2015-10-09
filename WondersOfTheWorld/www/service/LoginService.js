var Wonders = (function(Wonders){
	var login = function(username, password, successCallback, failureCallback) {
		var parameters = {
			"username" : username,
			"password" : password
		};

		Wonders.services._invokeOperation(endpointForLogin(parameters), "GET", {}, successCallback, failureCallback);
	};

	var logout = function(successCallback, failureCallback) {
		Wonders.services._invokeOperation("logout", "POST", {}, successCallback, failureCallback);
	};

	var endpointForLogin = function(parameters) {
		return "login?username=" + parameters.username + "&password=" + parameters.password;
    };

	Wonders.services = Wonders.services || {};
	Wonders.services.login = login;
    Wonders.services.logout = logout;
    return Wonders;
}(Wonders || {}));