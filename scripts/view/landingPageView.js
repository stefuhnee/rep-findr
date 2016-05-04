(function (module){
  var landingPageView = {};

  var userAddress;
  var $addressInputEl = $('input[name=userProvidedAddress]');

  // addressController.getUserAddress = function(){
  //   userAddress = $addressInputEl.val();
  //   console.log(userAddress);
  //   return userAddress;
  // };

  landingPageView.handleUserAddress = function(){
    $('.rep-findr').on('click', $addressInputEl, function(){
      userAddress = $addressInputEl.val().replace(/\s/g, '+');
      console.log('I was clicked');
      console.log(userAddress);
      page('/reps/' + userAddress);
      // civicDataAPI.initialize();
      // civicDataAPI.requestMap(userAddress);
      //mapfunction called here with userAddress passed in
    });
  };

  module.landingPageView = landingPageView;
})(window);
