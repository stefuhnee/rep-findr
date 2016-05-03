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
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '&includeOffices=true&levels=country&roles=' + official + '&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
    .done(function(data) {
      civicDataAPI.info = new Official(data);
      console.table(civicDataAPI.info);
    });
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

  civicDataAPI.requestDropBox = function(userAddress) {console.log(userAddress);
    $.get('https://www.googleapis.com/civicinfo/v2/voterinfo?address=' + userAddress + '&fields=dropOffLocations&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
    .done(function(data) {
      civicDataAPI.dropbox = data;
      console.table(civicDataAPI.dropbox);
    });
  };


  module.civicDataAPI = civicDataAPI;
})(window);
