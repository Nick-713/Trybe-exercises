const assert = require("assert");

function secondThirdSmallest(array) {
  let results = [];
  array.sort((x, y) => {
    return x - y;
  });
  results = [array[1], array[2]];
  return results;
}

const parameter = [10, 4, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const output = secondThirdSmallest(parameter);

assert.strictEqual(typeof secondThirdSmallest, "function");
assert.deepStrictEqual(output, result);
