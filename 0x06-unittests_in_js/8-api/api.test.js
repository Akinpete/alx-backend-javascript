const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct content type', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should handle non-existent pages', (done) => {
    request.get(`${url}/nonexistent`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
