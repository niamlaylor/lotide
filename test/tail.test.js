const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});

describe('#tail', () => {
  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
});

describe('#tail', () => {
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});

/*const test1 = tail([1,2,3,4,5,6,7]);
const test2 = tail(['liam', 'testing', 'head'])

assertArraysEqual(test1, [2,3,4,5,6,7])
assertArraysEqual(test2, ['testing', 'head']);*/
