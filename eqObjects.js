const eqObjects = function(object1, object2) {
  let matching = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    matching = false;
    return matching;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      for (const value in object1[key]) {
        if ((object1[key].length !== object2[key].length) || (object1[key][value] !== object2[key][value])) {
          matching = false;
          return matching;
        }
      }
    } else if (object1[key] !== object2[key]) {
      matching = false;
      return matching;
    }
  } return matching;
};


/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
*/

module.exports = eqObjects;