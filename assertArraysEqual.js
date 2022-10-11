const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let checkForMatch = eqArrays(array1, array2);
  if (checkForMatch) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`)
  }
  else if (!checkForMatch) {
    console.log(`🛑 Assertion Failed: ${array1} != ${array2}`)
  }
};

module.exports = assertArraysEqual;