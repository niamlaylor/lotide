const findKeyByValue = function(objectToCheck, value) {
  const keys = Object.keys(objectToCheck);
  let matchProperty = undefined;

  for (let p = 0; p < keys.length; p++) {
    if (value === objectToCheck[keys[p]]) {
      matchProperty = keys[p];
    }
  } return matchProperty;
};

/*
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  horror: 'Haunting of Hill House',
  crime: 'Blue Blood'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
*/

module.exports = findKeyByValue;