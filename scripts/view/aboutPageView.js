(function (module){
  var aboutPageView = {};
  aboutPageView.showPage = function() {
    $('#officials-page').hide();
    $('#about').show();
  };

  module.aboutPageView = aboutPageView;
}) (window);
