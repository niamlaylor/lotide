const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    const value = source[i];
    if (!itemsToRemove.includes(value)) {
      result.push(value);
    }
  } return result;
};

module.exports = without;