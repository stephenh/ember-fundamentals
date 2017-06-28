import Ember from 'ember';

const Course = Ember.Object.extend({
  "title": "No Title",
  "description": "",
  init() {
    this._super(...arguments);
    this.tags = [];
    this.languages = [];
  },
});

Course.languageName = (lang) => {
  if (lang === "js") {
    return "JavaScript";
  } else {
    return "Unknown";
  }
};

export default Course;
