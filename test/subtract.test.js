const test = require('node:test');
const assert = require('node:assert');
const { subtract } = require('../src/subtract');
test('subtract subtracts two numbers', () => {
  assert.strictEqual(subtract(5, 3), 2);
});
