(function(module) {
  var civicDataAPI = {};
  // var civicData = {};
  civicDataAPI.info = {};
  civicDataAPI.officialArray = [];
  function Official(name, address, party, phone, photoURL) {
    this.name = name;
    this.address = address;
    this.party = party;
    this.phone = phone;
    this.photoURL = photoURL;
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
    if (officials.length > 1) {
      for (var i = 0; i < officials.length; i++) {
        civicDataAPI.officialArray.push(new Official(officials[i].name, officials[i].address, officials[i].party, officials[i].phones[0], officials[i].photoUrl));
      };
    } else {
      civicDataAPI.officialArray.push(new Official(officials[0].name, officials[0].address, officials[0].party, officials[0].phones[0], officials[0].photoUrl));
    };
  };

  var geocoder;
  var map;

  civicDataAPI.initialize = function() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng();
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  civicDataAPI.requestMap = function () {
    geocoder.geocode( { 'address': userAddress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  module.civicDataAPI = civicDataAPI;
})(window);
