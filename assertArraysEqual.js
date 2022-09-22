const eqArrays = function(arr1, arr2) {
  let matching = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        matching = true;
      }
      else {
        matching = false;
      }
    }
    return matching;
  }
  else {
    return matching;
  }
};

const assertArraysEqual = function(array1, array2) {
  let checkForMatch = eqArrays(array1, array2);
  if (checkForMatch) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`)
  }
  else if (!checkForMatch) {
    console.log(`🛑 Assertion Failed: ${array1} != ${array2}`)
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);