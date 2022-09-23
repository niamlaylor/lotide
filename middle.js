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

const middle = function(middleArray) {
  let result = [];

  if (middleArray.length % 2 > 0 && middleArray.length > 2) {
    result.push(middleArray[(middleArray.length - 1) / 2]);
  }
  else if(middleArray.length % 2 === 0 && middleArray.length > 2) {
    result.push(middleArray[Math.floor((middleArray.length - 1) / 2)]);
    result.push(middleArray[Math.ceil((middleArray.length - 1) / 2)]);
  }
  else if (middleArray.length === 1 || middleArray.length === 2) {
    result = [];
  }
  return result;
}
assertArraysEqual(middle([1, 2]), []);