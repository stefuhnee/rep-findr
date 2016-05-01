var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: $TWITTER_CONSUMER_KEY,
  consumer_secret: $TWITTER_CONSUMER_SECRET,
  access_token_key: $TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: $TWITTER_ACCESS_TOKEN_SECRET,
});

client.stream('statuses/filter', {track: 'republican'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    throw error;
  });
});

client.stream();

var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
