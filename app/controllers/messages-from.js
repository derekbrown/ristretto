import Ember from 'ember';

export default Ember.Controller.extend({
  model: function(params) {
    return Ember.$.getJSON('flatwhite.dev:9000/messages/from/' + params.sender)
  }
});
