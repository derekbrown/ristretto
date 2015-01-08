import Ember from 'ember';
import _ from 'lodash';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.filter('message',{}, function(message) {
      var participants = message.get('participants');
      return _.where(participants, {'userName':params.participant}).length;
    });
  }
});
