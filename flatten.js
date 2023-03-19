// function to handle one level of nesting.
const flatten = function(arr) {
  return arr.flat(1); //using flat() to a depth of 1 nested array.
};

module.exports = flatten;