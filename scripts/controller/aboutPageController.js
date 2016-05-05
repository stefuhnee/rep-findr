(function (module){
  var aboutPageController = {};

  aboutPageController.initAboutPage = function() {
    aboutPageView.showAboutPage();
  };

  module.aboutPageController = aboutPageController;
}) (window);
