var parameters = {
  "username" : "",
  "password" : "" 
};

//Main function
//Output will be reflected via console.log function
function handler(req_parameters, callback) {
  var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
  var fs = require('fs');
  
  var text_to_speech = new TextToSpeechV1({
    username: req_parameters.username,  // SET YOUR USERNAME
    password: req_parameters.password,  // SET YOUR PASSWORD
    use_unauthenticated: true           // REMOVE TO USE YOUR USERNAME / PASSWORD
  });
  
  var params = {
    text: 'Hello from IBM Watson',
    voice: 'en-US_AllisonVoice', // Optional voice
    accept: 'audio/wav'
  };
  
  // Pipe the synthesized text to a file
  text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav'));
  console.log(text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav')))
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