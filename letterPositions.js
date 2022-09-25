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
}

const letterPositions = function(sentence) {
  let letterCounts = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      letterCounts[sentence[i]] = [];
    }
  }
  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] !== ' ') {
      letterCounts[sentence[x]].push(x);
    }
  }
  return letterCounts;
};
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);