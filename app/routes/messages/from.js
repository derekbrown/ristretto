import Ember from 'ember';

export default Ember.Route.extend({
  url: 'http://flatwhite.dev:9000/messages/from/',
  model: function(params) {
    return Ember.$.getJSON( this.url + params.sender);
  }
});
