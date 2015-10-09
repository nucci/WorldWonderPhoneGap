var LoginController = (function(LoginController){

    var cordovaInit = function() {

    };

    var domInit = function () {
        bindEvents();
        randomizeBg();
    };

    var bindEvents = function(){
        var login, cancel, register, registerMenu, loginMenu;
        
        registerMenu = document.querySelector("#registerMenuButton");
        registerMenu.addEventListener('click', showSignForm, false);

        loginMenu = document.querySelector("#loginMenuButton");
        loginMenu.addEventListener('click', showLoginForm, false);

        register = document.querySelector("#registerButton");
        register.addEventListener('click', registerUser, false);

        login = document.querySelector("#loginButton");
        login.addEventListener('click', loginUser, false);

        cancel = document.querySelectorAll(".cancel");
        for (var i = cancel.length - 1; i >= 0; i--) {
            cancel[i].addEventListener('click', showInitial, false);
        }
    };


    var randomizeBg = function(){
        var rand = Math.floor((Math.random() * 6)),
            bg   = document.querySelector(".bg");
        switch (rand) {
            case 0: bg.className += " ci";  break;
            case 1: bg.className += " co";  break;
            case 2: bg.className += " cr";  break;
            case 3: bg.className += " gwc"; break;
            case 4: bg.className += " mp";  break;
            case 5: bg.className += " pt";  break;
            case 6: bg.className += " tm";  break;    
        }
    };


    var showSignForm = function () {
        var signUpForm = document.querySelector("#register");
        signUpForm.className = signUpForm.className.replace(/hidden/g,"");

        hideInitial();
    };


    var showLoginForm = function () {
        var loginForm = document.querySelector("#login");
        loginForm.className = loginForm.className.replace(/hidden/g,"");

        hideInitial();
    };

    
    var showInitial = function () {
        var signUpForm, loginForm, initial;
        
        signUpForm = document.querySelector("#register");
        signUpForm.className += " hidden";

        loginForm = document.querySelector("#login");
        loginForm.className += " hidden";

        initial = document.querySelector("#initial");
        initial.className = initial.className.replace(/fadeOut/g,"");   
        initial.className += " fadeIn"; 
    };

    
    var hideInitial = function () {
        var initial = document.querySelector("#initial");
        initial.className = initial.className.replace(/fadeIn/g,"");  
        initial.className += " fadeOut"; 
    };


    var registerUser = function() {
        if (validateRegisterForm()) {
            //MOCK
            var name = "Gian Nucci",
                userName = "gianln",
                email = "gianln@ciandt.com",
                password = "123456";

            Wonders.services.register(name, userName, email, password, function(data){
                Wonders.plugins.storage.set("currentUser", JSON.stringify(data));
                Wonders.plugins.flowManager.present(null, null, "WonderList", true);
            }, function(code, message){
                Wonders.plugins.alert.show("Ops!", "Code: " + code + "\nMessage: " + message);
            });
        }
    };

    var loginUser = function() {
        if (validateLoginForm()) {
            //MOCK
            var userName = "gianln",
                password = "123456";

            Wonders.services.login(userName, password, function(data){
                Wonders.plugins.storage.set("currentSession", JSON.stringify(data));
                Wonders.plugins.flowManager.present(null, null, "WonderList", true);
            }, function(code, message){
                Wonders.plugins.alert.show("Ops!", "Code: " + code + "\nMessage: " + message);
            });
        }
    };

    var validateRegisterForm = function() {
        var regName     = document.getElementById("reg-name"),
            regUser     = document.getElementById("reg-username"),
            regEmail    = document.getElementById("reg-email"),
            regPassword = document.getElementById("reg-password");

        if( regName.value &&
            regUser.value &&
            regEmail.value &&
            regPassword.value &&
            regName.value.length > 0 &&
            regUser.value.length > 0 &&
            regEmail.value.length > 0 &&
            regPassword.value.length > 0) {
            return true;
        } else {
            Wonders.plugins.alert.show("Ops!", "Por favor, preencha todos os campos");
            return false;
        }
    };

    var validateLoginForm = function() {
        var username = document.getElementById("username"),
            password = document.getElementById("password");

        if( username.value &&
            password.value &&
            username.value.length > 0 &&
            password.value.length > 0){
            return true;
        } else {
            Wonders.plugins.alert.show("Ops!", "Por favor, preencha todos os campos");
            return false;
        }
    };

    document.addEventListener('deviceready', cordovaInit, false);
    document.addEventListener('DOMContentLoaded', domInit, false);   

    return LoginController;
}({}));
