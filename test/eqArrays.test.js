const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true); // => true
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false); // => true
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([], []), true);