
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();
  if (object1Keys.length === 0 && object2Keys === 0) {
    return true;
  } else if (object1Keys.length === object2Keys.length) {
    for (let i = 0; i < object1Keys.length; i++) {
      if (object1Keys[i] === object2Keys[i]) {
        for (let e of object1Keys) {
          if (object1[e] === object2[e]) {
            console.log(`Objects have matching keys: ${object1Keys} === ${object2Keys} and matching values: ${Object.values(object1).sort()} === ${Object.values(object2).sort()}`);
            return true;
          }
        }
        console.log("Object does not have matching value");
        return false;
      }
    }
  }
  return false;
};

// TEST CODE 1

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//console.log(eqObjects(shirtObject, anotherShirtObject));
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

// TEST CODE 2

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false