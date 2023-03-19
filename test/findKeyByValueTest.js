const findKeyByValue = require('../findKeyByValue');
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  const bestMovieByGenre = {
    action: "Inception",
    western: "The Good, the Bad and the Ugly ",
    superhero: "The Dark Knight"
  };

  it("Should pass if a matching value is found in an existing key of the object.", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.deepEqual(findKeyByValue(bestMovieByGenre, "Inception"), "action");
    assert.deepEqual(findKeyByValue(bestMovieByGenre, "The Dark Knight"), "superhero");
  });

  it("Should returun undefined if the value doesn't exist in the object's keys.", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    assert.deepEqual(findKeyByValue(bestMovieByGenre, "Lord of The Rings"), undefined);
  });

});