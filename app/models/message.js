import DS from 'ember-data';

var message = DS.Model.extend({
  subject: DS.attr('string'),
  sender: DS.attr(),
  participants: DS.attr(),
  messageText: DS.attr(),
  _id: DS.attr()
});

export default message;