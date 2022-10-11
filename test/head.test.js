const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

describe('#head', () => {
  it("returns 'liam' for ['liam', 'testing', 'head']", () => {
    assert.strictEqual(head(['liam', 'testing', 'head']), 'liam');
  });
});

describe('#head', () => {
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
});
