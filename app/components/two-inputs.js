import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  upperStr: computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(key, newVal) {
      this.set('str', newVal.toLowerCase());
      return newVal;
    }
  })
});
