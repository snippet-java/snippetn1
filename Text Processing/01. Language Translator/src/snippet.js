var parameters = {
  "username" : "f63c8977-de7d-4072-8e75-4df6d4f18be4",
  "password" : "KgRenT0OXctD",
  "text" : "Hello my friend",
  "fromLanguage" : "en",
  "toLanguage" : "es",
  "url" : "https://gateway.watsonplatform.net/language-translator/api/"
}

function handler(req_parameters, callback) {
  var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
  
  var language_translator = new LanguageTranslatorV2({
    username: req_parameters.username, // SET YOUR USERNAME
    password: req_parameters.password, // SET YOUR PASSWORD
    url: req_parameters.url
  });

  language_translator.translate({
    text: req_parameters.text,
    source: req_parameters.fromLanguage,
    target: req_parameters.toLanguage
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
