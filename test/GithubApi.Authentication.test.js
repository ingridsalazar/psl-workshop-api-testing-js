const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const { expect } = require('chai');

const urlBase = 'https://api.github.com';
const githubUserName = 'ingridsalazar';
const repository = 'psl-workshop-api-testing-js';
export ACCESS_TOKEN = 'f08bd589637b40829ab7687fb59c70e6102e36f3';

describe('Github Api Test', () => {
 describe('Authentication', () => {
   it('Via OAuth2 Tokens by Header', () =>
     agent.get(`${urlBase}/repos/${githubUserName}/${repository}`)
       .auth('token', process.env.ACCESS_TOKEN)
       .then((response) => {
         expect(response.status).to.equal(statusCode.OK);
         expect(response.body.description).equal('This is a Workshop about Api Testing in JavaScript');
       }));
 });
});
