
/*

Objective:
--------------
Our map function will take in two arguments:

1. An array to map
2. A callback function

The map function will return a new array based on the results of the callback function.

*/
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;

// test code 1

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, e => e[0]);


assertArraysEqual(results1[0], "g"); // equal
assertArraysEqual(results1[2], "t"); // equal


// test code 2
const elementalArray = ["oxygen", "hydrogen", "nitrogen"];
const results2 = map(elementalArray, e => e[0]);

assertArraysEqual(results2[1], "h"); // equal

// test code 3 - nested array
const nestedArray = [["oxygen", "hydrogen"], "ground", "control", "to", "major", "tom"];
const results3 = map(nestedArray, e => e[0]);
assertArraysEqual(results3[0], nestedArray[0][0]); // equal
