(function(module) {
  var addressController = {};
  var userAddress;
  var $addressInputEl = $('input[name=userProvidedAddress]');

  // addressController.getUserAddress = function(){
  //   userAddress = $addressInputEl.val();
  //   console.log(userAddress);
  //   return userAddress;
  // };

  addressController.handleUserAddress = function(){
    $('.rep-findr').on('click', $addressInputEl, function(){
      userAddress = $addressInputEl.val();
      console.log('I was clicked');
      civicDataAPI.requestData(userAddress, 'legislatorUpperBody');
    });
  };

  addressController.handleUserAddress();

  module.addressController = addressController;
})(window);
