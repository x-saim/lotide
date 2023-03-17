// function should not modify the array that is passed in.
// function should return a new array.
const tail = function(array) {
  array = array.slice(1);
  return array;
};

module.exports = tail;