/*
Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/
const findKeyByValue = function(object, value) {
  const keysObject = Object.keys(object); //returns array of object's keys.
  for (let e of keysObject) { // iterate through array.
    if (object[e] === value) { //check if object's values matches given value.
      return e; //returns key name
    }
  }
  return undefined; //once forLoop ends, if no key was found return undefined.
};

module.exports = findKeyByValue;