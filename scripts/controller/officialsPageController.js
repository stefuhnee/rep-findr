(function (module){
  var officialsPageController = {};

  officialsPageController.initRepsPage = function(ctx, next) {
    officialsPageView.showOfficialsPage();
    next();
  };

  officialsPageController.loadReps = function(ctx, next){
    civicDataAPI.officialArray = [];
    civicDataAPI.requestData(ctx.params.address, 'administrativeArea1', 'headOfGovernment');
    civicDataAPI.requestData(ctx.params.address, 'country', 'legislatorUpperBody');
    civicDataAPI.requestData(ctx.params.address, 'country', 'legislatorLowerBody');
    landingPageView.checkLocalStorage();
    next();
  };

  officialsPageController.loadMap = function(ctx){
    mapAPI.initialize();
    mapAPI.requestDropBox(ctx.params.address);
  };

  module.officialsPageController = officialsPageController;
}) (window);
