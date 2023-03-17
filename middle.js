const middle = function(arr) {
  let midpoint = Math.floor(arr.length / 2);
  let midArray = [];
  if (arr.length <= 2) { //checks for arrays with one or two elements
    return midArray;
  } else if (arr.length % 2 !== 0) { //checks odd condition
    midArray.push(arr[midpoint]); //midpoint will be rounded down due to Math.floor. This will allow to access indices of odd arrays.
  } else { //checks even condition
    midArray.push(arr[midpoint - 1]);
    midArray.push(arr[midpoint]);
  }
  return midArray;
};

module.exports = middle;
