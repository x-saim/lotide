const letterPositions = require('../letterPositions');
const assert = require("chai").assert;

describe('#letterPositions', () => {
  it('Should return an object with the indices of each letter in the input string', () => {
    assert.deepEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  
  it('Should return the correct indices for a given letter.', () => {
    assert.deepEqual(letterPositions('hello')['h'], [0]);
    assert.deepEqual(letterPositions('hello')['e'], [1]);
    assert.deepEqual(letterPositions('hello')['l'], [2, 3]);
    assert.deepEqual(letterPositions('hello')['o'], [4]);
  });

  it('Should return an empty object for an empty string input.', () => {
    assert.deepEqual(letterPositions(''), {});
  });

  it('Should return undefined for a letter not in the input string.', () => {
    assert.isUndefined(letterPositions('hello')['s']);
  });
});