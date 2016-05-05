(function (module){
  var aboutPageView = {};

  aboutPageView.showAboutPage = function() {
    $('.page').hide();
    $('#about-page').show();
  };

  module.aboutPageView = aboutPageView;
}) (window);
