const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal that the async test is complete
      })
      .catch(done); // Call done with the error if the promise is rejected
  });

  it('should do nothing when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // Since it does nothing, we want to check if the response is undefined
        expect(response).to.be.undefined; 
        done(); // Call done to signal that the async test is complete
      })
      .catch(done); // Call done with the error if the promise is rejected
  });
});
