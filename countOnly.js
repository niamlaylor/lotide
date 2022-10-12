const countOnly = function(array, object) {
  let results = {};

  for (const string of array) {
    if (object[string]) {
      results[string] = 0;
    }
  }
  for (const string of array) {
    if (object[string]) {
      results[string] += 1;
    }
  }
  return results;
};

/*
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
*/

module.exports = countOnly;