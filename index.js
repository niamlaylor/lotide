const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  takeUntil: takeUntil,
  without: without,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
};