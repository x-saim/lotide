const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //check for matching size of arrays
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { //checking non-matching elements
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;