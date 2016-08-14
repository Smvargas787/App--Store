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

  // -------------------------- Reading Tests ----------------------------//
                it('Read All', (done) => {
                  user.findAll((error) => {
                    util.debug('Failed to find all of the Pokemon Trainers listed', error);
                  }, (allUsers) => {
                    expect(allUsers.length).to.be.above(1);
                    done();
                  });
                });

  // -------------------------- 1 User Test Reader ----------------------------//
                it('Read One', (done) => {
                  user.find(testUser, (error) => {
                    util.debug('Err! Trainers name is too difficult, cannot read this one.', error);
                  }, (oneUser) => {
                    expect(oneUser.id).to.be.equal(testUser.id);
                    done();
                  });
                });

  // -------------------------- 1 User Test Creater ----------------------------//
                  it('Create One', () => {
                    expect(testUser.id).to.not.be.null;
                  });

  // -------------------------- 1 App Test Updater ----------------------------//
                    it('Update One', (done) => {
                      const updateUser = {
                        id: testUser.id,
                        name: 'Jesse',
                        age: 31,
                        hobby: 'Being Evil',
                      };

                      user.update(updateUser, (error) => {
                            util.debug('Unable to Update Evillllll', error);
                          }, (updateDBUser) => {
                            expect(updateDBUser.name).to.be.equal(updateUser.name);
                            testUser = updateDBUser;
                            done();
                          });
                        });
                      });
