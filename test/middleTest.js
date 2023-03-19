const middle = require("../middle.js");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns an empty array for an empty array input", () => {
    assert.deepEqual(middle([]), []);
  });

  it("For arrays with one element returns an empty array.", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("For arrays with two elements returns an empty array.", () => {
    assert.deepEqual(middle([1,2]),[]);
  });

  it("For arrays with odd number of elements, an array containing a single middle element should be returned.", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });

  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
});