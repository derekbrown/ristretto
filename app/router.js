import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('messages', {path: '/messages'}, function () {
    this.route('from', {path: 'from/:sender'});
    this.route('with', {path: 'with/:participant'});
  });
  this.route('users');
  this.route('login');
  this.route('signup');
});

export default Router;
