(function(module) {
  var civicDataAPI = {};
  var dataReturned = [];

  civicDataAPI.officialArray = [];

  function Official(name, office, address, party, phone, photoURL, social) {
    this.name = name;
    this.office = office;
    this.address = address;
    this.party = party;
    this.phone = phone;
    this.photoURL = photoURL;
    this.social = social;
    this.handlebarsID = this.name.replace(/[^a-z]+/ig, '');
  }

  civicDataAPI.requestData = function(userAddress, level, official) {
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '&includeOffices=true&levels=' + level + '&roles=' + official + '&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
    .success(function(data) {
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
