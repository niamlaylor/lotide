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
  if (arr1.length === arr2.length) {
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
  else {
    return matching;
  }
}
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true); // => true
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false); // => true
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), true); // => should PASS