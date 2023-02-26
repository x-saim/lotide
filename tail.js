const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// function should not modify the array thaat is passed in.
// function should return a new array.
const tail = function(array) {
  array = array.slice(1);
  return array;

};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3: An array with only one element should yield an empty array for its tail

const thirdCase = tail([1]);
assertEqual(thirdCase.length, 0); //empty array

// Test Case 4: empty array should yield an empty array for its tail

const fourthCase = tail([]);
assertEqual(fourthCase.length, 0); //empty array