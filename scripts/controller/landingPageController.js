(function (module){
  var landingPageController = {};

  landingPageController.initLandingPage = function(){
    // console.log('Hi. It is I... initLandingPage');
    landingPageView.handleUserAddress();
  };

  module.landingPageController = landingPageController;
})(window);
