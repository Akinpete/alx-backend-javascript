const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the app

describe('Index page', function() {
  // Start the server before running the tests
  before(function(done) {
    this.server = app.listen(7865, done); // Start the server
  });

  // Stop the server after the tests are done
  after(function(done) {
    this.server.close(done); // Close the server
  });

  it('Correct status code?', function(done) {
    request('http://localhost:7865', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function(done) {
    request('http://localhost:7865', function(err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
