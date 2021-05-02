const assert = require("assert");

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}
assert.strictEqual(myFizzBuzz(15), "fizzbuzz");
assert.strictEqual(myFizzBuzz(6), "fizz");
assert.strictEqual(myFizzBuzz(10), "buzz");
assert.strictEqual(myFizzBuzz(2), 2);
assert.strictEqual(myFizzBuzz("123"), false);
