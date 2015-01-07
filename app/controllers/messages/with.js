import Ember from 'ember';

export default Ember.Controller.extend({
  url: 'flatwhite.dev:9000/messages/with/',
  model: function(params) {
    return Ember.$.getJSON( this.url + params.participant);
  }
});
