export default DS.RESTAdapter.extend({
  host: "http://flatwhite.dev:9000",
});

// export default DS.RESTSerializer.extend({
//   primaryKey: "id.$oid"
// });

export default DS.Adapter.extend({
  findAll: function(store, type, sinceToken) {
    var url = "http://flatwhite.dev:9000/messages";
    var query = {since: sinceToken};
    return new Ember.RSVP.Promise(function (resolve, reject) {
      $.getJSON(url, query).then(function(data) {
        Ember.run(null, resolve, data.messages);
      }, function (jqXHR) {
        jqXHR.then = null;
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});


// export default DS.FixtureAdapter.extend({});