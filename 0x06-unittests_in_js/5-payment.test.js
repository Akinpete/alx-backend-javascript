// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  // Hook: runs before each test
  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log'); // Spy on console.log
  });

  // Hook: runs after each test
  afterEach(function () {
    consoleSpy.restore(); // Restore the spy after each test
  });

  it('should log the correct total for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    // Verify that console.log was only called once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    // Verify that console.log was only called once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
