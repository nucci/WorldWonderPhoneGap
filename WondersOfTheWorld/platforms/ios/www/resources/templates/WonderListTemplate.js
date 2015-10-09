var Wonders = (function (Wonders) {

    var wonderListTemplate =
        '{{#results}}' +
        '<div class="item flex row start" id="{{objectId}}">' +
        '   <div class="icon" style="background-image:url(\'{{thumb}}\')">&nbsp;</div><!--' +
        '   --><div class="content flex column center">' +
        '       <label>{{name}}</label>' +
        '       <span>{{description}}</span>' +
        '   </div>' +
        '</div>' +
        '{{/results}}';


    Wonders.templates = Wonders.templates || {};
    Wonders.templates.wonderListTemplate = wonderListTemplate;

    return Wonders;

}(Wonders || {}));