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
    return "arrays are not of equal length";
  }
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), "arrays are not of equal length"); // => should indicate arrays are not equal length.
assertEqual(eqArrays([3, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays(["element1", "element2", "element3"], ["element1", "element2", "element3"]), true); // => should pass
assertEqual(eqArrays([], []), true); // => should pass

