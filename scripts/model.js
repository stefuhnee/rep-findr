(function(module) {
  var civicDataAPI = {};
  // var civicData = {};

  civicDataAPI.info = {};

  civicDataAPI.requestData = function(userAddress, official) {
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '&includeOffices=true&levels=country&roles=' + official + '&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
    .done(function(data) {
      civicDataAPI.info = data;
      console.table(civicDataAPI.info);
      // return civicData;
    });
  };



  module.civicDataAPI = civicDataAPI;
})(window);
