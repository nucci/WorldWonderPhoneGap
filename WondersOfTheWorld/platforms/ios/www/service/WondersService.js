var Wonders = (function(Wonders){
    var list = function(id, successCallback, failureCallback) {
        Wonders.services._invokeOperation(endpointForId(id), "GET", {}, successCallback, failureCallback);
    };

    var endpointForId = function(id) {
        var endpoint = "classes/Wonders";
        endpoint += (!!id && id.length > 0) ? ("/" + id) : ("");
        return endpoint;
    };

    Wonders.services = Wonders.services || {};
    Wonders.services.list = list;
    return Wonders;
}(Wonders || {}));