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
}

const assertArraysEqual = function(array1, array2) {
  let checkForMatch = eqArrays(array1, array2);
  if (checkForMatch) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`)
  }
  else if (!checkForMatch) {
    console.log(`🛑 Assertion Failed: ${array1} != ${array2}`)
  }
};

const flatten = function(arrayToFlatten) {
  let result = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    const value = arrayToFlatten[i];
    if (!Array.isArray(value)) {
      result.push(value);
    }
    else if (Array.isArray(value)) {
      for (let x = 0; x < value.length; x++) {
        result.push(value[x]);
      }
    }
  } return result;
}
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);