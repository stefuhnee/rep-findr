(function(module) {
  var civicDataAPI = {};
  // var civicData = {};

  civicDataAPI.info = {};

  function Official(data) {
    var sen1 = data.officials[0];
    var sen2 = data.officials[1];
    this.name1 = sen1.name;
    this.address1 = sen1.address[0];
    this.phone1 = sen1.phones[0];
    this.name2 = sen2.name;
    this.address2 = sen2.address[0];
    this.phone2 = sen2.phones[0];
  }

  civicDataAPI.requestData = function(userAddress, official) {
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '&includeOffices=true&levels=country&roles=' + official + '&key=' + GOOGLE_CIVIC_KEY)
    .done(function(data) {
      civicDataAPI.info = new Official(data);
      console.table(civicDataAPI.info);
    });
  };



  module.civicDataAPI = civicDataAPI;
})(window);
