//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
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
