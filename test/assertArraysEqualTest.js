const assertArraysEqual = require("../assertArraysEqual");

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([1, 2, 3], [1, 2]); // not equal
assertArraysEqual([3, 2, 3], [1, 2, 3]); // not equal
assertArraysEqual(["element1", "element2", "element3"], ["element1", "element2", "element3"]); // equal
assertArraysEqual([], []); // equal