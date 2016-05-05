(function (module){
  var landingPageView = {};

  var userAddress;
  var $addressInputEl = $('input[name=userProvidedAddress]');

  landingPageView.showLandingPage = function() {
    $('.main-input input').val('');
    $('.page').hide();
    $('#landing-page').show();
  };

  landingPageView.handleUserAddress = function(){
    $('.rep-findr').one('click', $addressInputEl, function(){
      userAddress = $addressInputEl.val().replace(/\s/g, '+');
      zipCode = userAddress.split('+').pop();
      zipObject = {'user zipcode': zipCode};
      dataBase.myDataBaseRef.push(zipObject);
      page('/reps/' + userAddress);
    });
  };

  landingPageView.checkLocalStorage = function() {
    if (!localStorage.returned) {
      $('a[href="#first-time-modal"]').click();
      localStorage.returned = true;
    }
  };

  module.landingPageView = landingPageView;
})(window);
