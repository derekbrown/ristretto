import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://flatwhite.dev:9000",
});