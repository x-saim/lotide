const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {
  //we want to sort out the keys so indices match.
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();

  // check if the objects have matching keys
  if (!eqArrays(object1Keys, object2Keys)) {
    return false;
  }
  //check if the values of keys match
  for (let i = 0; i < object1Keys.length; i++) {
    const key = object1Keys[i];//this will also be the same for object2Keys since we previously confirmed they are equal.

    //check if the values of the keys are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      //if data type is array of the given objects, check if the value arrays are equal.
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }

      //if values are not arrays then check by testing primitives as values
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;