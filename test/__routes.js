const request = require('supertest');
const util = require('timeto_go');

let server;

beforeEach((done) => {
  server = require('../src/server');

  done();
});

afterEach((done) => {
  server.close();
  done();
});

describe('Gym Pathways', () => {
  const routes = [
      // -------------------------- Apps Routes ----------------------------//
    {
      route: '/api/v1/apps',
      method: 'get',
      description: 'Gym Pathway GET Activated: Apps',
    },
    {
      route: '/api/v1/apps',
      method: 'get',
      description: 'Gym Pathway GET Activated: Apps',
    },
    {
      route: '/api/v1/apps',
      method: 'post',
      description: 'Gym Pathway POST Activated: Apps',
    },
    {
      route: '/api/v1/apps',
      method: 'post',
      dataToSend: {
        name: 'Brock',
        age: '23',
        hobby: 'Creator of Pokemon Go',
      },
      description: 'Gym Pathway POST Activated: Apps',
    },
    {
      route: '/api/v1/apps/1',
      method: 'delete',
      description: 'Gym Pathway DELETE Activated: Apps',
    },

      // -------------------------- Users Routes ----------------------------//

    {
      route: '/api/v1/users',
      method: 'get',
      description: 'Poke Pathway GET Activated: Users',
    },
    {
      route: '/api/v1/users',
      method: 'get',
      description: 'Poke Pathway GET Activated: Users',
    },
    {
      route: '/api/v1/users',
      method: 'post',
      dataToSend: {
        name: 'Eevee',
        age: '5',
        hobby: 'Transforming',
      },
      description: 'Poke Pathway POST Activated: Users',
    },
    {
      route: '/api/v1/users/1',
      method: 'delete',
      description: 'Poke Pathway DELETE Activated: Users',
    },
  ];

    // -------------------------- Array Loop ----------------------------//

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].method === 'get') {
      it(routes[i].description, (done) => {
        request(server)
            .get(routes[i].route)
            .expect(200)
            .end(done);
        util.debug('Gym Pathway Activated: GET /apps', true);
      });
    } else if (routes[i].method === 'post') {
      it(routes[i].description, (done) => {
        request(server)
          .post(routes[i].route)
          .send(routes.dataToSend)
          .expect(200)
          .end(done);
        util.debug('Gym Pathway Denied Access: POST /apps', true);
      });
    } else {
      (routes[i].method === 'delete');
      it(routes[i].description, (done) => {
        request(server)
        .delete(routes[i].route)
        .expect(200)
        .end(done);
        util.debug('Gym Pathway Denied Access: DELETE /apps', true);
      });
    }
  }
});
