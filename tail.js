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

const result = tail([1, 2, 3, 4]);

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);

assertEqual(result, [2, 3, 4]);
assertEqual(result[0], 2);
assertEqual(result.length, 3);