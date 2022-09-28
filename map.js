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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const animals = ['lion', 'tiger', 'peacock'];
const cities = ['   New York ', '   Los Angeles ', ' Two Words   '];

const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => `${animal} 1`);
const results3 = map(cities, city => city.trim());

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['lion 1', 'tiger 1', 'peacock 1']);
assertArraysEqual(results3, ['New York', 'Los Angeles', 'Two Words']);