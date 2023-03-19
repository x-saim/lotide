const letterPositions = function(statement) {
  const results = {};
  for (let i = 0; i < statement.length; i++) {
    if (results[statement[i]]) {
      results[statement[i]].push(i);
    } else {

      results[statement[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;