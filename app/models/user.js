import DS from 'ember-data';

var user = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  userName: DS.attr('string'),
  email: DS.attr('string'),
  _id: DS.attr()
});

export default user;