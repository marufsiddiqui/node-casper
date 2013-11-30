var exec = require('child_process').exec;
var sys = require('sys');
var js2xmlparser = require("js2xmlparser");


exports.index = function(req, res, next) {
  var query = req.param('q'),
    scriptPath = './scripts/casperjs/raf.js',
    casperjsCmd = ['casperjs', scriptPath, query].join(' ');

  console.log('You are searching for ' + query);
  console.log('Executing casper script to query the site');
  console.log('Casper command is: ' + casperjsCmd);

  var data = {
    "firstName": "John",
    "lastName": "Smith",
    "query": query
  };

  exec(casperjsCmd, function(error, stdout, stderr) {
    if (error) {
	  next(error);
	} else {
	  sys.puts(stdout);
      res.send(200, js2xmlparser("person", data));
	}
  });
};