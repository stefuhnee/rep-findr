(function (module){
  var officialsPageController = {};

  officialsPageController.initRepsPage = function(ctx, next) {
    console.log('initRepsPage was triggered');
    officialsPageView.showOfficialsPage();
    next();
  };

  officialsPageController.loadReps = function(ctx, next){
    console.log('loadReps was triggered');
    civicDataAPI.officialArray = [];
    civicDataAPI.requestData(ctx.params.address, 'administrativeArea1', 'headOfGovernment');
    civicDataAPI.requestData(ctx.params.address, 'country', 'legislatorUpperBody');
    civicDataAPI.requestData(ctx.params.address, 'country', 'legislatorLowerBody');
    landingPageView.checkLocalStorage();
    next();
  };


  officialsPageController.loadMap = function(ctx){
    console.log('loadmap was called');
    mapAPI.initialize();
    mapAPI.requestDropBox(ctx.params.address);
  };

  // officialsPageController.initRepsPage = function(){
  //   officialsPageView.displayReps(civicDataAPI.handleData);
  // };






  module.officialsPageController = officialsPageController;
}) (window);
