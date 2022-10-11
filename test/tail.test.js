const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual')

const test1 = tail([1,2,3,4,5,6,7]);
const test2 = tail(['liam', 'testing', 'head'])

assertArraysEqual(test1, [2,3,4,5,6,7])
assertArraysEqual(test2, ['testing', 'head']);
