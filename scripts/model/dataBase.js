(function(module){

  var dataBase = {};

  dataBase.myDataBaseRef = new Firebase('https://rep-findr.firebaseio.com/');

  //You found our easter egg!
  dataBase.easterEgg = new Konami(function() {
    alert('Trump is president!  We\'re doomed.');
  });

  module.dataBase = dataBase;

})(window);
