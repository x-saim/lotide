const countOnly = require('../countOnly');
const assert = require("chai").assert;



describe('#countOnly', () => {
  it('Should return a count on all the strings in input array that match input object key with a truthy value.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Fang",
      "Jason",
      "Fang",
      "Fang",
      "Joe"
    ];

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result, { Jason: 1, Fang: 4 });
  });

  it('Should return a count on all the strings in input array that match input object key with a truthy value.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result["Fang"], 2);
  });

  it('Should return an empty object when no items are selected.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(firstNames, {});
    assert.deepEqual(result, {});
  });

  it('Should return undefined for keys that do not have a truthy value assigned.', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.isUndefined(result.Agouhanna);
  });

});
