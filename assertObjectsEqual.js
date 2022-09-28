const eqArrays = function(arr1, arr2) {
  let matching = false;
  if ((arr1.length === arr2.length) && arr1.length > 0) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        matching = true;
      }
      else {
        matching = false;
        break;
      }
    }
    return matching;
  }
  else if ((arr1.length === arr2.length) && arr1.length === 0){
    matching = true;
  }
  else {
    return matching;
  }
  return matching;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  const numberOfKeys1 = Object.keys(object1).length;
  const numberOfKeys2 = Object.keys(object2).length;
  let numberMatching = 0;
  let result = true;

  if (numberOfKeys1 !== numberOfKeys2) {
    result = false;
    return result;
  }

  for (let i = 0; i < numberOfKeys1; i++) { // I still need to make array values work
    if (object1[object1Keys[i]] !== object2[object1Keys[i]]) {
      if (Array.isArray(object1[object1Keys[i]]) && Array.isArray(object2[object1Keys[i]])) {
        result = eqArrays(object1[object1Keys[i]], object2[object1Keys[i]]);
      }
      else {
        result = false;
        break;
      }
    }
  } return result;
  };

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

const input1 = { a: '1', b: ['2', 'lol']};
const input2 = { b: ['2', 'lol'], a: '1'};
const input3 = { x: '22'};

assertObjectsEqual(input1, input2);
assertObjectsEqual(input1, input3);