var TweetModel = {
	/**
	 * Function that add a delay of random seconds to simulate network latency 
	 * and add to tweet object the number of seconds of the delay
	 * */
	parseTweet: function(tweet) {
		var promise = new Promise(function(resolve, reject) {
			var maxSeconds = 4000; // milliseconds
			var minSeconds = 500; // milliseconds
			var randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds) + minSeconds);

			// simulate ajax call / database read / ...
			setTimeout(function() {
				tweet.delay = randomSeconds;
				if(randomSeconds > 3000 && randomSeconds < 3500) {
					// uncomment next line to see reject working!
					// return reject('error with tweet' + tweet.title);
				}

				resolve(tweet);
			}, randomSeconds);
		});

		return promise;
	}
};

module.exports = TweetModel;