(function(module) {
  var addressController = {};
  var userAddress;

  addressController.collectUserAddress = function(e){
    userAddress = e.target.userProvidedAddress.value.replace(' ', '+');
  };

  addressController.handleUserAddress = function(){
    $('button').on('click', function{
      requestData();
    })
  }

  module.addressController = addressController;
})(window);
