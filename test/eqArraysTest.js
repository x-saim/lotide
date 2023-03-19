const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("Should return true for equal arrays.", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should return false for arrays of different lengths", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2]));
  });
  it("should return false for arrays with different elements", () => {
    assert.isFalse(eqArrays([3, 2, 3], [1, 2, 3]));
  });
  it("should return true for arrays with string elements", () => {
    assert.isTrue(eqArrays(["element1", "element2", "element3"], ["element1", "element2", "element3"]));
  });
  it("should return true for two empty arrays", () => {
    assert.isTrue(eqArrays([], []));
  });

});