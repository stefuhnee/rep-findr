(function(module) {
  var officialsPageController = {};

  officialsPageController.initRepsPage = function(ctx, next) {
    officialsPageView.showOfficialsPage();
    next();
  };

  officialsPageController.loadReps = function(ctx, next) {
    civicDataAPI.officialArray = [];
    civicDataAPI.requestData(ctx.params.address, {headOfGovernment: 'administrativearea1', legislatorUpperBody: 'country', legislatorLowerBody: 'country'});
    landingPageView.checkLocalStorage();
    next();
  };

  officialsPageController.loadMap = function(ctx) {
    mapAPI.initialize();
    mapAPI.requestDropBox(ctx.params.address);
  };

  module.officialsPageController = officialsPageController;
})(window);
