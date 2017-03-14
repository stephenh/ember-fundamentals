import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  init() {
    this._super(...arguments);
    this.setProperties({
      tags: [],
      languages: []
    });
  }
});

Course.reopenClass({
  languageName(lang) {
    switch(lang) {
      case 'js': return 'JavaScript';
      default: return 'Unknown';
    }
  }
});

export default Course;
