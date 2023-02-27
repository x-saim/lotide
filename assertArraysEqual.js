const eqArrays = function(array1, array2) {
  if (array1.length === 0 && array2.length === 0) { //this targets case where empty strings are evaluated.
    return true;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) { //looping to check each element in array 1 against array2 elements that share its respective index.
      if (array1[i] === array2[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Array 1 is equal to Array 2.");
  } else {
    console.log("Array 1 is not equal to Array 2.");
  }
};

// test code

assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([1, 2, 3], [1, 2]); // not equal
assertArraysEqual([3, 2, 3], [1, 2, 3]); // not equal
assertArraysEqual(["element1", "element2", "element3"], ["element1", "element2", "element3"]); // equal
assertArraysEqual([], []); // equal
