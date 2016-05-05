(function(module){

  var dataBase = {};

  dataBase.myDataBaseRef = new Firebase('https://rep-findr.firebaseio.com/');

  dataBase.easterEgg = new Konami(function() {
    alert('Trump is president!  We\'re doomed.');
  });

  module.dataBase = dataBase;

})(window);
