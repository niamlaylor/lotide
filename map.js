const map = function(array, callback) {
  const results = []; // you want to output a new array with the updated values
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

/*const words = ["ground", "control", "to", "major", "tom"];
const animals = ['lion', 'tiger', 'peacock'];
const cities = ['   New York ', '   Los Angeles ', ' Two Words   '];

const results1 = map(words);
console.log(results1);
const results2 = map(animals, animal => `${animal} 1`);
const results3 = map(cities, city => city.trim());

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['lion 1', 'tiger 1', 'peacock 1']);
assertArraysEqual(results3, ['New York', 'Los Angeles', 'Two Words']);
*/

module.exports = map;