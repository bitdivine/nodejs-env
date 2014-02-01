
//var  env = require('env-override');         // This is the usual incantation when using this module.
var envOverride = require('../lib/override'); // This is because we are within the module we're calling.

var defaults = require('./defaults.json');

var config = envOverride(defaults);

console.log(config.server.port);
