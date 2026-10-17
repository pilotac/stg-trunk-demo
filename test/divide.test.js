const test = require('node:test');
const assert = require('node:assert');
const { divide } = require('../src/divide');
test('divide divides two numbers', () => {
  assert.strictEqual(divide(12, 4), 3);
});
test('divide throws on division by zero', () => {
  assert.throws(() => divide(1, 0), RangeError);
});
