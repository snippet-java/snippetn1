
var parameters = {
	"username" : "ac00ef1a-5ad1-416c-b778-27953b982e13",
	"password" : "nHMkzS2ShYYY",
	"workspace_id" : "6a95d1df-8f65-4249-a58b-b5c83e56f4e4"
}

//Main function
//Output will be reflected via console.log function
function handler(req_parameters, callback) {
	var Conversation = require('watson-developer-cloud/conversation/v1');

	var conversation = new Conversation({  
	  username: req_parameters.username, // SET YOUR USERNAME
	  password: req_parameters.password, // SET YOUR PASSWORD
	  version: 'v1',
	  version_date: '2016-07-01'
	});

	conversation.message({
		input: { text: "" },
		workspace_id: req_parameters.workspace_id
	}, (err, response) => {
		if (err) {
			console.log('error:', err);
			if (typeof callback !== 'undefined' && typeof callback=="function") return callback(err);
		} else {
			console.log(JSON.stringify(response, null, 2));
			if (typeof callback !== 'undefined' && typeof callback=="function") return callback(response);

			conversation.message({
				input: { text: 'Hi Watson?' },
				context : response.context,
				workspace_id: req_parameters.workspace_id
			}, (err, response) => {
				if (err) {
					console.log('error:', err);
					if (typeof callback !== 'undefined' && typeof callback=="function") return callback(err);
				} else {
					console.log(JSON.stringify(response, null, 2));
					if (typeof callback !== 'undefined' && typeof callback=="function") return callback(response);

					conversation.message({
						input: { text: 'Turn on the wiper' },
						context : response.context,
						workspace_id: req_parameters.workspace_id
					}, (err, response) => {
						if (err) {
							console.log('error:', err);
							if (typeof callback !== 'undefined' && typeof callback=="function") return callback(err);
						} else {
							console.log(JSON.stringify(response, null, 2));
							if (typeof callback !== 'undefined' && typeof callback=="function") return callback(response);	
						}
					});
				}
			});
		}
	});
}


//Allows Execution of this process
//will run if only called directly
if (require.main === module) {
	handler(parameters,null);
} else {

//	name of the unit for logging and servlet path also
	var unitpath = "";

//	Template for making above code available
//	as service via superglue routine
	var superglue = require('sandbox-superglue');
	module.exports = {
			path: '/'+unitpath,
			priority: 1,

			init: function (app) {
				// something to do initially
			},
			GET:  function(req, res) {superglue.GET(req,res,parameters,unitpath)},
			POST: function(req, res) {superglue.POST(req,res,handler)}
	}
}
