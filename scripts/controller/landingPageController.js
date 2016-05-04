(function (module){
  var landingPageController = {};

  landingPageController.initLandingPage = function(){
    $('#officials-page').show();
    $('#about').hide();
    landingPageView.handleUserAddress();
  };

  module.landingPageController = landingPageController;
})(window);
