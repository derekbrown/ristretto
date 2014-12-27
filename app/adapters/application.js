import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: "http://flatwhite.dev:9000",
});

export default DS.Adapter.extend({
  findAll: function(store, type) {
    var url = "http://flatwhite.dev:9000/messages";
    return new Ember.RSVP.Promise(function (resolve, reject) {
      jQuery.getJSON(url).then(function(data) {
        Ember.run(null, resolve, data.messages);
      }, function (jqXHR) {
        jqXHR.then = null;
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});


// export default DS.FixtureAdapter.extend({});