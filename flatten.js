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
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);

module.exports = flatten;