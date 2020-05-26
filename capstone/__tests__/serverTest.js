// const app = require('../src/server/server');
const supertest = require('supertest');
const app = require('../src/server/server')

const request = supertest(app)

it('test the server health', async (done) => {
  const response = await request.get('/health')
  console.log(response);
  expect(response.text).toBe('OK');
  done();
})