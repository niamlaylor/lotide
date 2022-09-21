const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const head = function(array) {
  if (array.length < 1) {
    return undefined;
  }
  else {
    return array[0];
  }
};