const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;