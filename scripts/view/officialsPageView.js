(function (module){
  var officialsPageView = {};

  var render = function(official){
    var template = Handlebars.compile($('#rep-template').text());
    return template(official);
  };

  officialsPageView.showOfficialsPage = function() {
    $('.page').hide();
    $('#rep-list').empty();
    $('#officials-page').show();
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
    // $('#rep-list').on('click', 'h1', function(e) {
    //   e.preventDefault();
    // });
  };

  officialsPageView.modalFix = function() {
    $('#rep-list h1').on('click', function(e) {
      e.preventDefault();
    });
  };

  module.officialsPageView = officialsPageView;
}) (window);
