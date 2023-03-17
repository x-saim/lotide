const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle.js");


// test code

// 1. For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]), []); // equal

// 2. For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1, 2]), []); // equal

// 3. For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]); // equal

// 4. For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // equal