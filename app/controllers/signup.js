import Ember from 'ember';

export default Ember.Controller.extend({
  signupErrorMessage: "Signup failed.",
  isProcessing: false,
  signupFailed: false,
  isSlowConnection: false,
  timeout: null,

  actions: {
    signup: function() {
      var request;

      this.setProperties({
        isProcessing: true,
        signupFailed: false
      });

      this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));

      request = Ember.$.post("http://flatwhite.dev:9000/signup", this.getProperties("username", "password"));
      request.then(
        this.signupSuccess(this.get('username')).bind(this),
        this.signupFailure().bind(this)
      );
    }
  },

  signupSuccess: function(un) {
    this.reset();
    document.location = "/messages/with/" + un;
  },

  signupFailure: function() {
    this.reset();
    this.set("signupErrorMessage", "Invalid username or password.");
    this.set("signupFailed", true);
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