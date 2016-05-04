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
  }

  civicDataAPI.requestData = function(userAddress, level, official) {
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '&includeOffices=true&levels=' + level + '&roles=' + official + '&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
    .done(function(data) {
      civicDataAPI.handleData(data);
    });
  };

  civicDataAPI.handleData = function(data) {
    var officials = data.officials;
    var office = data.offices;
    officials.forEach(function(official) {
      var social = official.channels.reduce(function(acc, cur) {
        acc[cur.type] = cur.id;
        return acc;
      }, {});
      civicDataAPI.officialArray.push(new Official(official.name, office[0].name, official.address, official.party, official.phones[0], official.photoUrl, social));
    });
    officialsPageView.displayReps(civicDataAPI.officialArray);
  };

  module.civicDataAPI = civicDataAPI;
})(window);
