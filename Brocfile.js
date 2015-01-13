/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
app.import('bower_components/lot/lot.otf', {
  destDir: 'assets'
});
module.exports = app.toTree();
