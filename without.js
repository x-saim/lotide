const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;

// test code
console.log(without([1, 2, 3], [2])); // => [1, 3]
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]); // should pass

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //should pass
assertArraysEqual(without([1, 2, 3, 6, 7, 8], [1, 2]), [3, 6, 7, 8]); // should pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);