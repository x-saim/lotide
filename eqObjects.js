
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {


  //we want to sort out the keys so indices match.
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();

  // check if the objects have matching keys
  if (!eqArrays(object1Keys, object2Keys)) {
    return false;
  }
  // 2. check if the values of keys match
  for (let i = 0; i < object1Keys.length; i++) {
    const key = object1Keys[i]; //this will also be the same for object2Keys since we previously confirmed they are equal.

    //check if the values of the keys are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      //if data type is array of the given objects, check if the value arrays are equal.
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }

      //if values are not arrays then check by testing primitives as values
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// TEST CODE 1 - Primitives As Values

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

// TEST CODE 2 - Primitives As Values

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

// TEST CODE 3 - Arrays As Values

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false