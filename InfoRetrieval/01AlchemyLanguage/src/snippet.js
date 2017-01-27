var parameters = {
  api_key: "",
  text: 'Yes I win the first place in the competition. I am so happy!'
};

//Main function
//Output will be reflected via console.log function
function handler(req_parameters, callback) {
  var watson = require('watson-developer-cloud');
  var alchemy_language = watson.alchemy_language({
    api_key: req_parameters.api_key,  // SET YOUR API KEY
    use_unauthenticated: true         // REMOVE TO USE YOUR API KEY
  });
  
  alchemy_language.sentiment(req_parameters, function (err, response) {
    if (err) {
      console.log('error:', err);
      if (typeof callback !== 'undefined' && typeof callback=="function") return callback(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
      if (typeof callback !== 'undefined' && typeof callback=="function") return callback(response);
    }
  });
}


//Allows Execution of this handler
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
