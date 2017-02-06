var parameters = {
  api_key: ""
};

//Main function
//Output will be reflected via console.log function
function handler(req_parameters, callback) {
  var watson = require('watson-developer-cloud');
  var alchemy_data_news = watson.alchemy_data_news({
    api_key: req_parameters.api_key,  // SET YOUR API KEY
    use_unauthenticated: true         // REMOVE TO USE YOUR API KEY
  });
  
  var params = {
    start: 'now-1d',
    end: 'now',
    count: 10,
    return: 'enriched.url.title'
  };
  
  alchemy_data_news.getNews(params, function (err, response) {
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
