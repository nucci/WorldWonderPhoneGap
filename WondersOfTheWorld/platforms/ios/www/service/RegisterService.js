var Wonders = (function(Wonders){
	var registerUser = function(name, username, email, password, successCallback, failureCallback) {
		var parameters = {
			"name" : name,
			"username" : username,
			"email" : email,
			"password" : password
		};

		Wonders.services._invokeOperation("users", "POST", parameters, successCallback, failureCallback);
	};

	Wonders.services = Wonders.services || {};
	Wonders.services.register = registerUser;
	return Wonders;
}(Wonders || {}));