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

/*
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);
*/

module.exports = letterPositions;