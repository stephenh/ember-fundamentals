
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('placeholder-url', 'helper:placeholder-url', {
  integration: true
});

test('it renders', function(assert) {
  this.set('height', '1234');
  this.render(hbs`{{placeholder-url h=height}}`);
  assert.equal(this.$().text().trim(), 'http://placekitten.com/100/1234');
});

