const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

// test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('yes', 'yes');
assertEqual(1, 1);
assertEqual(1, 3);
