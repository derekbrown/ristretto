import Ember from 'ember';

export default Ember.TextField.extend({
  focusIn: function() {
    this.$().parent().addClass('input-filled');
  },

  focusOut: function() {
    if( this.value.trim() === '' ) {
      this.$().parent().removeClass('input-filled');
    }
  }
});
