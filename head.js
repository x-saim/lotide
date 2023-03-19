const head = function(array) {
  if (array.length) {
    return array[0]; //returns the first index of array.
  }
  return undefined;
};

module.exports = head;