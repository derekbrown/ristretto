import Ember from 'ember';

export default Ember.TextField.extend({
  focusIn: function() {
    this.$().parent().addClass('input-filled');
  },

  focusOut: function() {
    if( this.value.trim() === '' ) {
      this.$().parent().removeClass('input-filled');
    }
  },

  keyUp: function() {
    // var $siblingLabel = this.$().siblings('.form-label');
    // if( this.validate(this.value) ) {
    //   $siblingLabel.addClass('validated');
    // } else {
    //   $siblingLabel.removeClass('validated');
    // }
  },

  validate: function (textToValidate) {
    return textToValidate.length >=5;
  }
});
