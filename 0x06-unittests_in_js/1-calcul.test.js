const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber - SUM', () => {
  it('should return 6 when type is SUM and inputs are 2.4 and 3.6', () => {
    assert.strictEqual(calculateNumber('SUM', 2.4, 3.6), 6);
  });

  it('should return 6 when type is SUM and inputs are 2.5 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6); // updated to 6
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('should return 2 when type is SUBTRACT and inputs are 3.7 and 2.3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 2.3), 2); // updated to 2
  });

  it('should return -2 when type is SUBTRACT and inputs are 2.3 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 3.7), -2); // updated to -2
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('should return 2.25 when type is DIVIDE and inputs are 8.6 and 4.3', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.6, 4.3), 2.25); // updated to 2.25
  });

  it('should return Error when type is DIVIDE and the second number rounds to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
  });
});
