const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  for (let e of Object.keys(object)) {
    if (callback(object[e])) { //checks if object key exists, if true code if statement will execute.
      return e;
    }
  }
  return undefined;
};

module.exports = findKey;

// TEST CODE
const myObj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

findKey(myObj1, x => x.stars === 2); // => "noma"

assertEqual(findKey(myObj1, x => x.stars === 2), "noma");
assertEqual(findKey(myObj1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(myObj1, x => x.stars === 4), undefined);
