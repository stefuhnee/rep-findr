(function (module){
  var landingPageController = {};

  landingPageController.initLandingPage = function(){
    landingPageView.showLandingPage();
    landingPageView.handleUserAddress();
  };

  module.landingPageController = landingPageController;
})(window);
