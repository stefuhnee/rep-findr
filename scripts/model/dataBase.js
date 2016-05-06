(function(module){

  var dataBase = {};

  dataBase.myDataBaseRef = new Firebase('https://rep-findr.firebaseio.com/');

  //  VVV=====You found the Easter egg!========VVV  //
  dataBase.easterEgg = new Konami(function() {
    alert('Trump is president!  We\'re doomed.');
  });

  module.dataBase = dataBase;

})(window);
