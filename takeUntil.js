/*

Function objective:

The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.


Implementation:

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let results = [];

  //for of loop to iterate the through and run the callback function for each element
  for (let e of array) {

    //if the callback value is a truthy value, loop will terminate and provide the results array.
    if (callback(e)) {
      return results;
    }
    results.push(e);
  }
  return results;
};

module.exports = takeUntil;

//TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //calback function x => x < 0 should return true (truthy value) on data1[5].

console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// test code
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // equal
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); // equal
