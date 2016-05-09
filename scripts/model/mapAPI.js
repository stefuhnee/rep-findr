(function(module) {
  var mapAPI = {};
  var geocoder;
  var map;

  mapAPI.initialize = function() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(122.332, -47.606);
    var mapOptions = {
      zoom: 15,
      center: latlng,
      scrollwheel: false,
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  };

  mapAPI.requestMap = function(pollAddress, pollTitle) {
    geocoder.geocode({'address': pollAddress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Your ballot dropbox location is ' + pollTitle + ' ' + pollAddress,
          animation: google.maps.Animation.DROP
        });
      }
    });
  };

  mapAPI.requestDropBox = function(userAddress) {
    $.get('https://www.googleapis.com/civicinfo/v2/voterinfo?address=' + userAddress + '&fields=dropOffLocations&key=' + GOOGLE_CIVIC_TOKEN)
    .success(function(data) {
      if (data.hasOwnProperty('dropOffLocations')) {
        mapAPI.dropbox = data;
        var pollAddress = mapAPI.dropbox.dropOffLocations[0].address.line1 + ' ' + mapAPI.dropbox.dropOffLocations[0].address.city + ' ' + mapAPI.dropbox.dropOffLocations[0].address.state + ' ' + mapAPI.dropbox.dropOffLocations[0].address.zip;
        var pollTitle = mapAPI.dropbox.dropOffLocations[0].name;
        $('#address-text').text('Your ballot dropbox location is ' + pollTitle + ' ' + pollAddress);
        mapAPI.requestMap(pollAddress, pollTitle);
      } else {
        mapAPI.requestMap(userAddress);
        $('#address-text').text('Your ballot dropbox location is not listed in the Google Civic API so here is a map of your address instead:');
      }
    })
    .fail(function() {
      mapAPI.requestMap(userAddress);
      $('#address-text').text('Your ballot dropbox location is not listed in the Google Civic API, so here is a map of your address instead:');
    });
  };

  module.mapAPI = mapAPI;
})(window);
