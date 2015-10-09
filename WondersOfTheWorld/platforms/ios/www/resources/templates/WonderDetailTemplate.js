var Wonders = (function (Wonders) {

    var wonderDetailTemplate =
        '<div class="banner">' +
        '   <img src="{{imageUrl}}" />' +
        '</div>' +
        '<div class="description">' +
        '   <h2>{{name}}</h2>' +
        '   <h3>{{country}}</h3>' +
        '   <p>' +
        '   {{description}}' +
        '   </p>' +
        '</div>';

    Wonders.templates = Wonders.templates || {};
    Wonders.templates.wonderDetailTemplate = wonderDetailTemplate;

    return Wonders;

}(Wonders || {}));