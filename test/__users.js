const expect = require('chai').expect;
const request = require('supertest');

describe('Pokemon', () => {
  let server;
  let user;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Pokemon
  it('GET /api/v1/users returns multiple pokemons', (done) => {
    request(server)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const users = res.body;

        // Save one single user from the list to test on in later tests
        this.user = users[0];

        expect(users.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single user
  it('GET /api/v1/users/:id returns an user obj with a id, name property, and type', (done) => {
    request(server)
      .get(`/api/v1/users/${this.user.id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        user = res.body;
        expect(user).to.have.property('id');
        expect(user).to.have.property('name');
        expect(user).to.have.property('type');
      })
      .end(done);
  });
});
