const head = require("../head.js");

const assert = require("chai").assert;

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for [ 'Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 'element 1' for ['element 1']", () => {
    assert.strictEqual(head(["element 1"]), "element 1"); //pass
  });
  it("returns undefined for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

});