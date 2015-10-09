var WonderDetailController = (function(WonderDetailController){

    var init = function(){
        Wonders.plugins.flowManager.retrieveControllerData(retrieveDataSuccess, retrieveDataFailure);
    };

    var retrieveDataSuccess = function(data){
        var html = Mustache.render(Wonders.templates.wonderDetailTemplate, data);
        var listElement = document.querySelector("#detail");
        listElement.innerHTML = html;};

    var retrieveDataFailure = function(code, message){
        Wonders.plugins.alert.show("Ops!", "Code: " + code + "\nMessage: " + message);
    };

    document.addEventListener('deviceready', init, false);

    return WonderDetailController;
}({}));