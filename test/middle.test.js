const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

describe('#middle', () => {
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

//assertArraysEqual(middle([1, 2]), []);
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);