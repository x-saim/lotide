const eqObjects = require('./eqObjects');

const asssertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🟩🟩🟩 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


asssertObjectsEqual(shirtObject, anotherShirtObject); // assertion passes
asssertObjectsEqual(shirtObject, longSleeveShirtObject); // assertion fails
asssertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // assertion passes
asssertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // assertion fails

