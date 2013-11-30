var express = require('express');

module.exports = function(app, config) {
  app.configure(function () {
    app.use(express.compress());
    app.set('port', config.port);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(req, res) {
      res.send(400, 'Bad request');
    });
  });

  app.configure('development', function () {
    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });
};
