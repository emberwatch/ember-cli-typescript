import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import { TestContext } from 'ember-test-helpers';

describe('Unit | Transform | foo', function() {
  setupTest('transform:foo', {
    // Specify the other units that are required for this test.
    // needs: ['transform:foo']
  });

  // Replace this with your real tests.
  it('exists', function(this: TestContext) {
    let transform = this.subject();
    expect(transform).to.be.ok;
  });
});
