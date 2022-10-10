const head = require('../head');
const assertEqual = require('../assertEqual')

const test1 = head([1,2,3,4,5,6,7]);
const test2 = head(['liam', 'testing', 'head'])

assertEqual(test1, 1)
assertEqual(test2, 'liam');