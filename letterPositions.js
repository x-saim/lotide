/* Implementation of letterPositions()

- return all indices (zero-based positions) in the strong where each character is found.



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
  //let statementArr = statement.split(""); //convert str to array
  const arr = [];
  //logic to update results here
  for (let i = 0; i < statement.length; i++) {
    //let letter = statement[i];
    if (!results[statement[i]]) { //checking if letter in str exists in results.
      results[statement[i]] = arr.push(i);
    }
  }
  return results;
};

const statement = "hello";
console.log(letterPositions(statement));
console.log(letterPositions(statement)["e"]);
assertArraysEqual(letterPositions(statement)["e"], [1]);
//assertArraysEqual(letterPositions(statement)["h"], [0]);
//assertArraysEqual(letterPositions(statement)["l"], [2, 3]);