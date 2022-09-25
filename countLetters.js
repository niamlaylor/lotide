const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));
console.log(countLetters('LHL'));