const head = function(array) {
  if (array.length) {
    return array[0];
  }
  return undefined;
};

module.exports = head;