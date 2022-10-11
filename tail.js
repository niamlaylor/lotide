const assertArraysEqual = require('./assertArraysEqual');

const tail = function(array) {
  const emptyArray = [];
  if (array.length < 1) {
    return emptyArray;
  }
  else if (array.length === 1) {
    return emptyArray;
  }
  else {
    return array.slice(1);
  }
};

module.exports = tail;