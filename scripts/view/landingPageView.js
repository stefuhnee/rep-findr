(function (module){
  var landingPageView = {};

  var userAddress;
  var $addressInputEl = $('input[name=userProvidedAddress]');

  landingPageView.handleUserAddress = function(){
    $('.rep-findr').on('click', $addressInputEl, function(){
      userAddress = $addressInputEl.val().replace(/\s/g, '+');
      console.log(userAddress);
      zipCode = userAddress.split('+').pop();
      zipObject = {'user zipcode': zipCode};
      dataBase.myDataBaseRef.push(zipObject);
      console.log(zipCode);
      page('/reps/' + userAddress);
    });
  };

  module.landingPageView = landingPageView;
})(window);
