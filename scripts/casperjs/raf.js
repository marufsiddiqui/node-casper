var utils = require('utils');
var fs = require('fs');
var casper = require('casper').create({
  verbose      : true,
  logLevel     : 'error',
  pageSettings : {
    loadImages  : false,
    loadPlugins : false,
    userAgent   : 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
  }
});

var query = casper.cli.get(0);
var uri = 'https://google.com?q=' + query;

console.log('Now visiting the url ' + uri);

casper.start(uri, function () {
  this.echo(this.getTitle());
  this.capture("result.png");
});

// wait for the popup to show
/*casper.waitForSelector('.searchResult', function () {
  this.echo("I've waited for a second.");
  this.capture("result.png");
  require('utils').dump(JSON.stringify(this.getPageContent()));
});*/

casper.run();