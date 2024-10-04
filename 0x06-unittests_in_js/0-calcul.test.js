const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when inputs are 1.5 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return -3 when inputs are -1.4 and -1.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.6), -3);
  });

  it('should return 0 when inputs are 0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should handle cases where one number is rounded down and one up', () => {
    assert.strictEqual(calculateNumber(1.6, 2.3), 4);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
