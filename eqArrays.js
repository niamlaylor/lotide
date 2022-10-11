const eqArrays = function(arr1, arr2) {
  let matching = true;
  if (arr1.length !== arr2.length) {
    matching = false;
    return matching;
  }
  for (const value in arr1) {
    if (arr1[value] !== arr2[value]) {
      matching = false;
      return matching;
    }
  } return matching;
};

module.exports = eqArrays;