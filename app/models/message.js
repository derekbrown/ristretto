import DS from 'ember-data';
var attr = DS.attr;

var message = DS.Model.extend({
      subject: attr('string'),
      sender: attr(),
      participants: attr(),
      messageText: attr(),

    });

export default message;