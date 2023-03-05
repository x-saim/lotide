const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Array 1 is equal to Array 2.");
  } else {
    console.log("Array 1 is not equal to Array 2.");
  }
};

// function to handle one level of nesting.
const flatten = function(arr) {
  return arr.flat(1); //using flat() to a depth of 1 nested array.
};


// test code
// 1. Should pass
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

// 2. checking arrays with empty slots, should be equal.

assertArraysEqual(flatten([1, 2, , 4, 5]), [1, 2, 4, 5]);

// 3 Checking if it can flatten 2 layers of nested arrays, should not be equal.
assertArraysEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
