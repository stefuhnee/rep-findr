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
      userAddress = $addressInputEl.val().replace(/\s/g, '+');
      console.log('I was clicked');
      console.log(userAddress);
      page('/reps/' + userAddress);
      // civicDataAPI.initialize();
      // civicDataAPI.requestMap(userAddress);
      //mapfunction called here with userAddress passed in
    });
  };



  addressController.loadReps = function(ctx, next){

    civicDataAPI.requestData(ctx.params.address, 'country', 'legislatorUpperBody');
    civicDataAPI.requestData(ctx.params.address, 'country', 'legislatorLowerBody');
    civicDataAPI.requestData(ctx.params.address, 'administrativeArea1', 'headOfGovernment');
  };

  addressController.handleUserAddress();

  module.addressController = addressController;
})(window);
