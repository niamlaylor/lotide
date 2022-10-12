# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published as part of my bootcamp studies at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @niamlaylor/lotide`

**Require it:**

`const _ = require('@niamlaylor/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: returns the first index of an array/string
* tail: returns all indexes of an array/string except 0
* middle: returns the value of middle index in an array
* takeUntil: runs until callback function is true
* without: returns an array with specified items removed from input array
* map: runs a callback function for each value in an array
* letterPositions: returns the index of a certain value in an array/string
* flatten: will pull any values in nested arrays into the main array
* findKey: returns the key of an object that matches the callback function value
* findKeyByValue: returns the key of an argument value
* eqObjects: tests if two objects are equal (boolean)
* eqArrays: tests if two arrays are equal (boolean)
* countOnly: returns an object with counts of true values from an input object
* countLetters: return counts of how many times a letter appears in a string
* assertObjectsEqual: asserts that two objects are equal
* assertEqual: asserts that two arguments return equal values
* assertArraysEqual: asserts that two arrays are equal