const expect = require('chai').expect;
const app = require('../src/models/app');
const util = require('../lib/util');

let testUser = {};

  // -------------------------- Tests Set Up ----------------------------//
  describe('Users', () => {
    beforeEach((done) => {
      const mockUser = {
        name: 'Ash',
        age: 24,
        hobby: 'Catching Pokemon',
      };

  // -------------------------- Creating Mocha Stub ----------------------------//
            user.create(mockUser, (error) => {
              util.debug('Error! Cannot create Poke Trainer', error);
            }, (newDbUser) => {
              testUser = newDbUser;
              done();
            });
          });

  // -------------------------- Mutiple Users DB Stopper ----------------------------//
            afterEach((done) => {
              user.destroy(testUser, (error) => {
                util.debug('Stop! You are unable to delete this trainer.', error);
              }, (deletedResponse) => {
                expect(deletedResponse).to.be.equal(1);
                done();
              });
            });
