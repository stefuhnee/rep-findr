(function(module) {
  var addressController = {};
  var userAddress;
  var $addressInputEl = $('input[name=userProvidedAddress]');
  
  addressController.getUserAddress = function(){
    userAddress = $addressInputEl.val();
    return userAddress;
  };

  addressController.handleUserAddress = function(){
    $('.rep-findr').on('click', $addressInputEl, function(){

      console.log('I was clicked');
      civicDataAPI.requestData();

    });
  };

  addressController.handleUserAddress();

  module.addressController = addressController;
})(window);
