var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

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
