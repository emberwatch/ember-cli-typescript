import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';
import { TestContext } from 'ember-test-helpers';

describe('Unit | Model | foo', function() {
  setupModelTest('foo', {
    // Specify the other units that are required for this test.
    needs: []
  });

  // Replace this with your real tests.
  it('exists', function(this: TestContext) {
    let model = this.subject();
    // var store = this.store();
    expect(model).to.be.ok;
  });
});
