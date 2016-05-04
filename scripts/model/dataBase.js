(function(module){

  var dataBase = {};

  dataBase.myDataBaseRef = new Firebase('https://rep-findr.firebaseio.com/');

  module.dataBase = dataBase;

})(window);
