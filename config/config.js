var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'Infosys'
    },
    port: 3000,
    db: 'mongodb://localhost/e-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'Infosys'
    },
    port: 3000,
    db: 'mongodb://localhost/e-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'Infosys'
    },
    port: 3000,
    db: 'mongodb://localhost/e-production'
  }
};

module.exports = config[env];
