const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should be PASS
assertEqual(eqArrays([3, 2, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays(["element1", "element2", "element3"], ["element1", "element2", "element3"]), true); // => should pass
assertEqual(eqArrays([], []), true); // => should pass