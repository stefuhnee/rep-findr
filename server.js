var express = require('express'),
  port = process.env.PORT || 3000,
  app = express(),
  firebase = require('firebase');

app.use(express.static('./'));

app.get('*', function(request, response) {
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
});
