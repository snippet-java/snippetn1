var parameters = {
  "username" : "",
  "password" : ""
};

//Main function
//Output will be reflected via console.log function
function handler(req_parameters, callback) {
  var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
  var fs = require('fs');
  
  var speech_to_text = new SpeechToTextV1({
    username: req_parameters.username,  // SET YOUR USERNAME
    password: req_parameters.password,  // SET YOUR PASSWORD
    use_unauthenticated: true           // REMOVE TO USE YOUR USERNAME / PASSWORD
  });

  var params = {
    // From file
    audio: fs.createReadStream('./public/resource/STTInput.wav'),
    content_type: 'audio/wav; rate=44100'
  };

  speech_to_text.recognize(params, function (err, response) {
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
