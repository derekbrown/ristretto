import DS from 'ember-data';

var message = DS.Model.extend({
  subject: DS.attr('string'),
  sender: DS.attr('string'),
  participants: DS.attr(),
  messageText: DS.attr()
});

export default message;