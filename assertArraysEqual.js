const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  //using ternary operator instead of previously committed if-else statement.
  eqArrays(array1, array2) ? console.log("Array 1 is equal to Array 2.") : console.log("Array 1 is not equal to Array 2.");
};

module.exports = assertArraysEqual;