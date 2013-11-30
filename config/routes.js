module.exports = function(app){

	var api = require('../app/controllers/api/search');

  app.get('/api/v1/search', api.index);
};
