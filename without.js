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

const without = function(source, itemsToRemove) {
  let updatedSource = [];
  //we will loop through source to identify any non-matching elements that are in the array itemsToRemove.
  for (let i = 0; i < source.length; i++) {
    //utilizing Array.prototype.includes()
    if (itemsToRemove.includes(source[i]) === false) {
      //pushing any non-matching elements to new array to filter source.
      updatedSource.push(source[i]);
    }
  } return updatedSource;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Array 1 is equal to Array 2.");
  } else {
    console.log("Array 1 is not equal to Array 2.");
  }
};

// test code
console.log(without([1, 2, 3], [2])); // => [1, 3]
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]); // should pass

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //should pass
assertArraysEqual(without([1, 2, 3, 6, 7, 8], [1, 2]), [3, 6, 7, 8]); // should pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);