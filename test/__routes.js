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

describe('routes', () => {
    const routes = [
      // -------------------------- Apps Routes ----------------------------//
      {
        route: '/api/apps',
        method: 'get',
        description: 'Gym Pathway GET Activated: Apps',
      },
      
