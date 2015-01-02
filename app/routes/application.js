import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    socialSignin: function (provider) {
      var controller = this.controller;
      controller.set('error', null);
      controller.set('authData', null);
      this.get('torii').open(provider).then(function (authData) {
        controller.set('authData', authData);
      }, function (error) {
        controller.set('error', error);
      });
    }
  }
});
