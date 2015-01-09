import Ember from 'ember';

export default Ember.Controller.extend({
  isProcessing: false,
  loginFailed: false,
  isSlowConnection: false,
  timeout: null,

  actions: {
    login: function() {
      var request;

      this.setProperties({
        isProcessing: true,
        loginFailed: false
      });

      this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));

      request = Ember.$.post("http://flatwhite.dev:9000/login", this.getProperties("username", "password"));

      request.then(this.loginSuccess.bind(this), this.loginFailure.bind(this));
    }
  },

  loginSuccess: function() {
    this.reset();
    document.location = "/messages/with/redswan29";
  },

  loginFailure: function() {
    this.reset();
    this.set("loginFailed", true);
  },

  slowConnection: function() {
    this.set("isSlowConnection", true);
  },

  reset: function() {
    clearTimeout(this.get("timeout"));
    this.setProperties({
      isProcessing: false,
      isSlowConnection: false
    });
  }
});