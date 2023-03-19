// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    //added if statement to only increment results if the item is found in itemsToCount object.
    if (itemsToCount[item]) {
      //if statement to check if results has a matching item, if not it will store the value 1 to begin and then continue the iteration.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;