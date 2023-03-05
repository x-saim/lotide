const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //check for matching size of arrays
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //return boolean T/F when matching/nonmatching elements are found.
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
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
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should be PASS
assertEqual(eqArrays([3, 2, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays(["element1", "element2", "element3"], ["element1", "element2", "element3"]), true); // => should pass
assertEqual(eqArrays([], []), true); // => should pass

