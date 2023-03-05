const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/*

Implement the function findKeyByValue which takes in an object and a value. 

It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

*/

const findKeyByValue = function (object, value) {
  //1. iterate through object
  for (let key in object) {
    //2. find first key which contains given value
    if (object[key] === value) {
      return key; //return first key 
    }
  }
  //3. if no key with given value exists, return undefined.
  return undefined
}


// TEST CODE

//Test Case 1
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");  // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);  // pass


//Test Case 2

const bestMovieByGenre = {
  sci_fi: "Inception",
  western: "The Good, the Bad and the Ugly ",
  superhero: "The Dark Knight"
}

assertEqual(findKeyByValue(bestMovieByGenre, "Inception"), "sci_fi"); // pass
assertEqual(findKeyByValue(bestMovieByGenre, "The Dark Knight"), "superhero"); // pass
assertEqual(findKeyByValue(bestMovieByGenre, "Lord of The Rings"), undefined); // pass
