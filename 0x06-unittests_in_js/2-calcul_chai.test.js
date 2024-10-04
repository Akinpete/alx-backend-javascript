const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber - SUM', () => {
  it('should return 6 when type is SUM and inputs are 2.4 and 3.6', () => {
    expect(calculateNumber('SUM', 2.4, 3.6)).to.equal(6);
  });

  it('should return 6 when type is SUM and inputs are 2.5 and 2.5', () => {
    expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('should return 2 when type is SUBTRACT and inputs are 3.7 and 2.3', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 2.3)).to.equal(2);
  });

  it('should return -2 when type is SUBTRACT and inputs are 2.3 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 2.3, 3.7)).to.equal(-2);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('should return 2.25 when type is DIVIDE and inputs are 8.6 and 4.3', () => {
    expect(calculateNumber('DIVIDE', 8.6, 4.3)).to.equal(2.25);
  });

  it('should return Error when type is DIVIDE and the second number rounds to 0', () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });
});
