const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const checkForMatch = eqObjects(actual, expected);
  if (checkForMatch) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else if (!checkForMatch) {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`)
  }
};

/*
const input1 = { a: '1', b: ['2', 'lol']};
const input2 = { b: ['2', 'lol'], a: '1'};
const input3 = { x: '22'};

console.log(assertObjectsEqual(input1, input2));
console.log(assertObjectsEqual(input1, input3));
*/

module.exports = assertObjectsEqual;