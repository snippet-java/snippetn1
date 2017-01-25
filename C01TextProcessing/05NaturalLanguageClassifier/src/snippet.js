var parameters = {
  "username" : "1e2a85d3-f9f3-4d77-9b44-d0d56c93a028",
  "password" : "EjhIkxAUWWVQ",
  "text" : "Is it sunny?",
  "classifier_id" : "ff18c7x157-nlc-2810"
}

function handler(req_parameters, callback) {
  var NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');
  var fs = require('fs');
  
  var natural_language_classifier = new NaturalLanguageClassifierV1({
    username : req_parameters.username,
    password : req_parameters.password
  });

  natural_language_classifier.classify({
    text: req_parameters.text,
    classifier_id: req_parameters.classifier_id
  }, function(err, response) {
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
