const request = require('supertest');
const util = require('../lib/util');

let server;

beforeEach((done) => {
  server = require('../src/server');

  done();
});

afterEach((done) => {
  server.close();
  done();
});
