const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('First Api Tests', () => {
  it('Consume IP Service', () => agent.get('https://httpbin.org/ip').then((response) => {
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  }));

  it('Consume GET Service with query parameters', () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    return agent.get('https://httpbin.org/get')
      .query(query)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);
      });
  });

  it('Consume POST Service', () => {
    const body = {
      name: 'John',
      age: 31,
      city: 'New York'
    };

    return agent
      .post('https://httpbin.org/post')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
      });
  });

  it('Consume PUT Service', () => {
    const body = {
      name: 'John',
      age: 32,
      city: 'New York'
    };

    return agent
      .put('https://httpbin.org/put')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
      });
  });

  it('Consume HEAD Service', () => agent
    .head('https://httpbin.org/headers')
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response).to.have.property('headers');
    }));

  it('Consume PATCH Service', () => agent
    .patch('https://httpbin.org/patch')
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
    }));

  it('Consume DELETE Service', () => agent
    .del('https://httpbin.org/delete')
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
    }));
});
