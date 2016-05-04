(function (module){
  var officialsPageView = {};

  var render = function(official){
    var template = Handlebars.compile($('#rep-template').text());
    return template(official);
  };

  officialsPageView.displayReps = function(repArray){
    $('#rep-list').empty();
    repArray.forEach(function(official){
      $('#rep-list').append(render(official));
    });
  };

  module.officialsPageView = officialsPageView;
}) (window);
