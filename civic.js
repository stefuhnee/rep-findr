civicData = {};

function requestData () {
 $.get('https://www.googleapis.com/civicinfo/v2/representatives?address=2367+Las+Colinas+Ave+Los+Angeles+CA+90041&key=AIzaSyBe_nzIg-0E_xI5V8owjDT_we48Xp0psPk')
 .done(function(data) {
   civicData = data;
   console.log(civicData);
 });
};
