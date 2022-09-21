const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

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