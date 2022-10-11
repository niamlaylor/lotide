const countLetters = function(inputString) {
  letterCounts = {};

  for (let letter = 0; letter < inputString.length; letter++) {
    if (inputString[letter] !== ' ') {
      letterCounts[inputString[letter]] = 0;
    }
  }
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      letterCounts[inputString[i]] += 1;
    }
  }
  return letterCounts;
  };

  /*
const result1 = countLetters("lighthouse in the house");
assertEqual(result1['i'], 2);
assertEqual(result1['h'], 4);
*/

module.exports = countLetters;