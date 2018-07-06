import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | singlecontact/display', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:singlecontact/display');
    assert.ok(route);
  });
});
