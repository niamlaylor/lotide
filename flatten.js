// refactored with recursion

const flatten = function(arrayToFlatten) {
  let result = [];
  arrayToFlatten.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// expect [1, 2, 3, 4, 5, 6]

module.exports = flatten;