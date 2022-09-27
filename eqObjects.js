const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};
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

const ab = { a: '1', b: '2', c: '5'};
const ba = { b: '2', a: '1', c: '3'};
assertEqual(eqObjects(ab, ba), false);

const cd = { c: "1", d: ["2", 3], e: '1'};
const dc = { e: '99', d: ["2", 3], c: "1" };
const dc2 = { d: ["2", 3, 4, 5], c: "1" };
assertEqual(eqObjects(cd, dc), false);
assertEqual(eqObjects(dc, dc2), false);

