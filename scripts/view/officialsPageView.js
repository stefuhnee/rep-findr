(function(module) {
  var officialsPageView = {};

  var render = function(official) {
    var template = Handlebars.compile($('#rep-template').text());
    return template(official);
  };

  officialsPageView.showOfficialsPage = function() {
    $('.page').hide();
    $('#rep-list').empty();
    $('#officials-page').show();
  };

  officialsPageView.displayReps = function(repArray) {
    $('#rep-list').empty();
    repArray.forEach(function(official){
      $('#rep-list').append(render(official));
    });
  };

  officialsPageView.modalFix = function() {
    $('#rep-list h1').on('click', function(e) {
      e.preventDefault();
    });
  };

  module.officialsPageView = officialsPageView;
})(window);
