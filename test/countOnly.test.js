const assert = require('chai').assert;
const countOnly = require('../countOnly');

const result1 = countOnly([
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

describe('#countOnly', () => {
  it('returns 1 when searching Jason', () => {
    assert.deepEqual(result1["Jason"], 1);
  });
});

describe('#countOnly', () => {
  it('returns undefined when searching Karima', () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
});