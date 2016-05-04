(function(module){
  var mapAPI = {};
  var geocoder;
  var map;

  mapAPI.initialize = function() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(122.332, -47.606);
    var mapOptions = {
      zoom: 15,
      center: latlng
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  };

  mapAPI.requestMap = function (pollAddress, pollTitle) {
    geocoder.geocode( { 'address': pollAddress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Your dropbox location is: ' + pollTitle + ' ' + pollAddress,
          animation: google.maps.Animation.DROP
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  mapAPI.requestDropBox = function(userAddress) {
    $.get('https://www.googleapis.com/civicinfo/v2/voterinfo?address=' + userAddress + '&fields=dropOffLocations&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
    .done(function(data) {
      mapAPI.dropbox = data;
      var pollAddress = mapAPI.dropbox.dropOffLocations[0].address.line1 + ' ' + mapAPI.dropbox.dropOffLocations[0].address.city + ' ' + mapAPI.dropbox.dropOffLocations[0].address.state + ' ' + mapAPI.dropbox.dropOffLocations[0].address.zip;
      var pollTitle = mapAPI.dropbox.dropOffLocations[0].name;
      console.log(pollAddress);
      mapAPI.requestMap(pollAddress, pollTitle);
      $('#map').show();
    })
    .fail(function() {
      mapAPI.initialize();
      $('#map').hide();
      console.log('No map for you!');
    });
  };

  module.mapAPI = mapAPI;
})(window);
