//Predefined parameters
//which may contain api_key, username, password 
var parameters = {
		"username" : "",
		"password" : "",
		
		// choose one of the 3 available samples 
		
		"screen_name" : "Oprah"
//		"screen_name" : "KingJames"
//		"screen_name" : "ladygaga"
};

//Main function
//Output will be reflected via console.log function
function process(req_parameters, callback) {

	var watson = require('watson-developer-cloud');
	var request = require('request');

	var personality_insights = watson.personality_insights({
		username: req_parameters.username, // SET YOUR USERNAME
		password: req_parameters.password, // SET YOUR PASSWORD
		use_unauthenticated: true,
		version: 'v2'
	});

	// obtain pre-loaded tweets from watson-developer-cloud github
	var url = "https://raw.githubusercontent.com/watson-developer-cloud/personality-insights-nodejs/master/public/data/twitter/" + req_parameters.screen_name + "_tweets.json";
	request(url, function (err, response, body) {
		if (err) {
			console.log('error:', err);
			if (typeof callback !== 'undefined' && typeof callback=="function") return callback(err);
			return;
		}

		// map tweets to Personality Insights format
		var tweets = JSON.parse(body || []);
		var contentItems = [];
		for (var i in tweets) {
			var tweet = tweets[i];
			var contentItem = {
					content : tweet.text || "",
					id : tweet.id_str || "",
					created : new Date(tweet.created_at).getTime(),
					contenttype : "text/plain",
					language : "en",
					parentid : tweet.in_reply_to_status_id || ""
			}
			if (contentItem.parentid)
				contentItem.reply = true;

			contentItems.push(contentItem);
		}

		var profileJson = { contentItems : contentItems };

		// Personality Insights using Watson Lib
		personality_insights.profile(
				profileJson,
				function (err, response) {
					if (err) {
						console.log('error:', err);
						if (typeof callback !== 'undefined' && typeof callback=="function") return callback(err);
					} else {
						console.log(JSON.stringify(response, null, 2));
						if (typeof callback !== 'undefined' && typeof callback=="function") return callback(response);
					}
				}
		);

	})
}

//Allows Execution of this process
//will run if only called directly
if (require.main === module) {
	process(parameters,null);
} else {

//	name of the unit for logging and servlet path also
	var unitpath = "";

//	Template for making above code available
//	as service via superglue routine
	var superglue = require('../lib/superglue.js');
	module.exports = {
			path: '/'+unitpath,
			priority: 1,

			init: function (app) {
				// something to do initially
			},
			GET:  function(req, res) {superglue.GET(req,res,parameters,unitpath)},
			POST: function(req, res) {superglue.POST(req,res,process)}
	}
}