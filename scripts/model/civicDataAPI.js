(function(module) {
  var civicDataAPI = {};

  civicDataAPI.officialArray = [];

  function Official(name, office, address, party, phone, photoURL, social) {
    this.name = name;
    this.office = office;
    this.address = address;
    this.party = party;
    this.phone = phone;
    this.photoURL = photoURL;
    this.social = social;
    this.handlebarsID = this.name.split(/\s/g).join('-');
  }

  civicDataAPI.requestData = function(userAddress, queryObj) {
    dataReturned = [];
    for (var key in queryObj) {
      $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '&includeOffices=true&levels=' + queryObj[key] + '&roles=' + key + '&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
      .done(function(data) {
        dataReturned.push(data);
        console.log('dataReturned array', dataReturned);
        if (dataReturned.length === 3) {
          civicDataAPI.handleData(dataReturned);
        }
      });
    };
  };

  civicDataAPI.handleData = function(data) {
    data.forEach(function(dataObj) {
      var officials = dataObj.officials;
      var office = dataObj.offices;
      officials.forEach(function(official) {
        var social = official.channels.reduce(function(acc, cur) {
          acc[cur.type] = cur.id;
          return acc;
        }, {});
        civicDataAPI.officialArray.push(new Official(official.name, office[0].name, official.address, official.party, official.phones[0], official.photoUrl, social));
      });
      officialsPageView.displayReps(civicDataAPI.officialArray);
    });
  };

  module.civicDataAPI = civicDataAPI;
})(window);
