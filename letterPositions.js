const letterPositions = function(statement) {
  const results = {};
  for (let i = 0; i < statement.length; i++) {
    //check if results has any keys equal to letters in statement
    if (results[statement[i]]) {
      //if letter matches key, we will assign the key the index of the letter as an array.
      results[statement[i]].push(i);
    } else {
    //if the key doesn't exist, we will assign results object a new key:value pair with the key being letter from statement and [i] being an array with the index of the letter.
      results[statement[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;