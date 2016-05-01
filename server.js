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

var http = require('http');

http.createServer(function (q, r) {

  // control for favicon

  if (q.url === '/favicon.ico') {
    r.writeHead(200, {'Content-Type': 'image/x-icon'} );
    r.end();
    console.log('favicon requested');
    return;
  }

  // not the favicon? say hai
  console.log('hello');
  r.writeHead(200, {'Content-Type': 'text/plain'} );
  r.write('Hello, world!');
  r.end();

}).listen(8000);
