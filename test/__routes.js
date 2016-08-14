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
      {
        route: '/api/apps',
        method: 'get',
        description: 'Gym Pathway GET Activated: Apps',
      },
      {
        route: '/api/apps',
        method: 'post',
        description: 'Gym Pathway POST Activated: Apps',
      },
      {
        route: '/api/apps',
        method: 'post',
        dataToSend: {
          name: 'Brock',
          age: '23',
          hobby: 'Creator of Pokemon Go',
        },
        description: 'Gym Pathway POST Activated: Apps',
    },
    {
        route: '/api/apps/1',
        method: 'delete',
        description: 'Gym Pathway DELETE Activated: Apps',
      },

      // -------------------------- Users Routes ----------------------------//
