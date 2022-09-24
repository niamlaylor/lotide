const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};


const countOnly = function(array, object) {
  let trueToCount = {};
  const keys = Object.keys(object);

  for (let k = 0; k < keys.length; k++) {
    for (let n = 0; n < array.length; n++) {
      if (keys[k] === array[n] && object[keys[k]] === true) { //switch to == if we want to take in other data types
        trueToCount[keys[k]] = 0;
      }
    }
  }
  const keysToCount = Object.keys(trueToCount);
  for (let i = 0; i < keysToCount.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (keysToCount[i] === array[x]) {
        trueToCount[keysToCount[i]] += 1;
      }
    }
  }
  return trueToCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
