/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/foundation/scss/normalize.scss');
app.import('bower_components/foundation/scss/foundation.scss');

app.import('bower_components/foundation/js/vendor/fastclick.js');
app.import('bower_components/foundation/js/vendor/jquery.cookie.js');
app.import('bower_components/foundation/js/vendor/modernizr.js');
app.import('bower_components/foundation/js/vendor/placeholder.js');
app.import({
  development: 'bower_components/foundation/js/foundation.js',
  production: 'bower_components/foundation/js/foundation.min.js'
});

module.exports = app.toTree();
