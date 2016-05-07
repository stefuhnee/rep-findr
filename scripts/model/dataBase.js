(function(module) {

  var dataBase = {};

  dataBase.myDataBaseRef = new Firebase('https://rep-findr.firebaseio.com/');

  //  VVV=====You found the Easter egg!========VVV  //
  dataBase.easterEgg = new Konami(function() {
    $('.main-input div').css('background-image', 'url(http://cdn.fansided.com/wp-content/blogs.dir/276/files/2014/07/murica-eagle-2013-850x560.jpg)').css('background-size', 'contain');
  });

  module.dataBase = dataBase;
})(window);
