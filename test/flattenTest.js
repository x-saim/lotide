const flatten = require('../flatten');
const assert = require("chai").assert;

describe("#flatten", () => {
  it("Should pass if nested array (depth of 1) is equal to array with matching elements.", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("Should pass by ignoring empty slots if the array being flattened is sparse.", () => {
    assert.deepEqual(flatten([1, 2, , 4, 5]), [1, 2, 4, 5]);
  });

  it("Should reduce the depth of an array with depth of 2 to depth of 1.", () => {
    assert.deepEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, [3, 4], 5, 6]);
  });

  it("Should return the same array if the input array doesnt have any nested arrays.", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });

  it("Should handle arrays with strings and numbers.", () => {
    assert.deepEqual(flatten([1, 2, ["3", 4], 5,"6"]), [1, 2, "3", 4, 5,"6"]);
  });
});