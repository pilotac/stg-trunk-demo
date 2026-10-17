const test = require('node:test');
const assert = require('node:assert');
const { multiply } = require('../src/multiply');
test('multiply multiplies two numbers', () => {
  assert.strictEqual(multiply(3, 4), 12);
});
test('multiply never returns negative zero', () => {
  assert.strictEqual(Object.is(multiply(-0, 5), 0), true);
});
