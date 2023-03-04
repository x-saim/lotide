/* Implementation of letterPositions()

Goal: return all indices (zero-based positions) in the strong where each character is found.

*/


const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Array 1 is equal to Array 2.");
  } else {
    console.log("Array 1 is not equal to Array 2.");
  }
};


//expected output should be an array with indices noted.

const letterPositions = function (statement) {
  const results = {};
  for (let i = 0; i < statement.length; i++) {

    //check if results has any keys equal to letters in statement
    if (results[statement[i]]) {

      //if letter matches key, we will assign the key the index of the letter as an array.
      results[statement[i]].push(i)
    } else {
      //if the key doesn't exist, we will assign results object a new key:value pair with the key being letter from statement and [i] being an array with the index of the letter.
      results[statement[i]] = [i];
    }
  }
  return results;
}

const statement = "hello";
console.log(letterPositions(statement)); // { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
console.log(letterPositions(statement)["e"]); // [1]
assertArraysEqual(letterPositions(statement)["e"], [1]); //equal
assertArraysEqual(letterPositions(statement)["h"], [0]); //equal
assertArraysEqual(letterPositions(statement)["l"], [2, 3]); //equal
assertArraysEqual(letterPositions(statement)["o"], [4]); //equal