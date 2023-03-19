const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();

  if (!eqArrays(object1Keys, object2Keys)) {
    return false;
  }
  for (let i = 0; i < object1Keys.length; i++) {
    const key = object1Keys[i];

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;