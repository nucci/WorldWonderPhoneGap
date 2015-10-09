var WonderListController = (function(WonderListController){

    var wonderArray = [];

    var init = function(){
        Wonders.services.list(null, listSuccessCallback, listFailureCallback);
    };

    var listSuccessCallback = function(data){
        wonderArray = data.results;
        var html = Mustache.render(Wonders.templates.wonderListTemplate, data);
        var listElement = document.querySelector("#list");
        listElement.innerHTML = html;

        bindListElements();
    };

    var listFailureCallback = function(code, message){
        Wonders.plugins.alert.show("Ops!", "Code: " + code + "\nMessage: " + message);
    };

    var bindListElements = function () {
        var items = document.querySelectorAll(".item");
        for (var i = items.length - 1; i >= 0; i--) {
            items[i].addEventListener('click', itemTapped, false);
        }
    };

    var itemTapped = function () {
        var data;
        var listNodes = document.getElementById("list").childNodes;
        for(var i = 0; i < listNodes.length; i++) {
            if(listNodes[i] == this) {
                data = wonderArray[i];
            }
        }
        console.log(data);
        Wonders.plugins.flowManager.present(null,null,"WonderDetail",false,data);
    };

    var logout = function(){
        Wonders.services.logout(logoutSuccess, logoutSuccess);
    };

    var logoutSuccess = function(){
        Wonders.plugins.flowManager.present(null, null, "Login", true, {});
    };

    document.addEventListener('deviceready', init, false);
    document.addEventListener('DOMContentLoaded', init, false);

    WonderListController.logout = logout;
    return WonderListController;
}({}));