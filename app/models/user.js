import DS from 'ember-data';
var attr = DS.attr,
    user = DS.Model.extend({
      firstName: attr('string'),
      lastName: attr('string'),
      userName: attr('string'),
      email: attr('string'),
      _id: attr(),

      fullName: function(key, value) {
        if (arguments.length > 1) {
          var nameParts = value.split(/\s+/);
          this.set('firstName', nameParts[0]);
          this.set('lastName', nameParts[1]);
        }

        return this.get('firstName') + ' ' + this.get('lastName');
      }.property('firstName', 'lastName')
    });

export default user;