const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),['Lighthouse', 'Labs']);
  });

  it("The tail function should be returning a new array and not modify the original array that is passed in.", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words,["Yo Yo", "Lighthouse", "Labs"]);
  });

  it("An array with only one element should yield an empty array for its tail", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("Empty array should yield an empty array for its tail", () => {
    assert.deepEqual(tail([]), []);
  });
});