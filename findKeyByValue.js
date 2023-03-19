const findKeyByValue = function(object, value) {
  const keysObject = Object.keys(object);
  for (let e of keysObject) {
    if (object[e] === value) {
      return e;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;