(function (module){
  var officialsPageView = {};

  var render = function(official){
    var template = Handlebars.compile($('#rep-template').text());
    return template(official);
  };

  // var renderModal = function(official){
  //   var templateModal = Handlebars.compile($('#rep-template-modal').text());
  //   return template(official);
  // };

  // var registerHelper = Handlebars.registerHelper('if', function(conditional, options) {
  //   if (conditional) {
  //     return options.fn(this);
  //   }
  // });

  officialsPageView.displayReps = function(repArray){
    $('#rep-list').empty();
    repArray.forEach(function(official){
      $('#rep-list').append(render(official));
      // $('#rep-modal').append(renderModal(official));
    });
  };

  module.officialsPageView = officialsPageView;
}) (window);
