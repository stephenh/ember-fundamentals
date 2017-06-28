import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'course-list-item',
  attributeBindings: ['title:data-name'],
  title: Ember.computed('title', function() {
    return this.get('model.title');
  }),
  // why get(model.summary) but computed is just summary?
  // why does {{model.summary}} not do this already?
  summary: Ember.computed('summary', function() {
    return this.get('model.summary');
  }),
  src: Ember.computed('image-info', function() {
    return this.get('model.image-info.square2x.url');
  })
});
