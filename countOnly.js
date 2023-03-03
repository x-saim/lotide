const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function will be given an array and an object (2 parameters)
// function to return an object containing counts of everything
// that the input object listed. only keys with truthy value will be counted.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
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
}

// test code

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); //pass
assertEqual(result1["Karima"], undefined); //pass
assertEqual(result1["Fang"], 2); //pass
assertEqual(result1["Agouhanna"], undefined); //pass

console.log(result1);
