var express = require('express');
var TweetModel = require('./model/tweet-model');
var app = express();

var harcodedTweets = [];

// create 20 fake test tweets data
for(var i = 0; i < 20; i++) {
	harcodedTweets.push({
		'title': 'Tweet ' + i,
		'text': 'text of tweet number ' + i
	});
}


app.get('/', function(req, res, next) {
	var promises = [];

	harcodedTweets.forEach(function(tweet) {
		promises.push(TweetModel.parseTweet(tweet));
	});

	Promise.all(promises).then(function(arrayOfParserTweets) {
		console.log(arrayOfParserTweets);
		res.json(arrayOfParserTweets);
	}).catch(function(err) {
		res.status(500).json({'error': err});
	});
});

var port = 3000;
app.listen(port);
console.log('server listening at port', port);