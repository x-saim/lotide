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


const middle = function(arr) {
  let midpoint = Math.floor(arr.length / 2);
  let midArray = [];
  if (arr.length <= 2) { //checks for arrays with one or two elements
    return midArray;
  } else if (arr.length % 2 !== 0) { //checks odd condition
    midArray.push(arr[midpoint]);
  } else { //checks even condition
    midArray.push(arr[midpoint - 1]);
    midArray.push(arr[midpoint]);
  }
  return midArray;
};


// test code

// 1. For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]), []); // equal

// 2. For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1, 2]), []); // equal

// 3. For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]); // equal

// 4. For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // equal

