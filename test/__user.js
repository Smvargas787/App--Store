const expect = require('chai').expect;
const user = require('../src/models/user');
const util = require('../lib/util');

let testUser = {};

// -------------------------- Tests Set Up ----------------------------//

describe('Pokemon', () => {
  beforeEach((done) => {
    const mockUser = {
      name: 'Ash',
      age: 22,
      hobby: 'Cathing Pokemon',
    };

    // -------------------------- Creating Mocha Stub ----------------------------//

    user.add(mockUser, (error) => {
      util.debug('Error! Cannot create Poke Trainer', error);
    }, (newDbUser) => {
      testUser = newDbUser;
      done();
    });
  });

  // -------------------------- Mutiple Users DB Stopper ----------------------------//

  afterEach((done) => {
    user.remove(testUser, (error) => {
      util.debug('Stop! You are unable to delete this trainer', error);
    }, (deletedReply) => {
      expect(deletedReply).to.be.equal(1);
      done();
    });
  });

  // -------------------------- Reading Tests ----------------------------//

  it('Find All Pokemon', (done) => {
    user.all((error) => {
      util.debug('Failed to find all of the Pokemon Trainers listed', error);
    }, (allUsers) => {
      expect(allUsers.length).to.be.above(1);
      done();
    });
  });

  // -------------------------- 1 User Test Reader ----------------------------//

  it('Retrieve One Pokemon', (done) => {
    user.one(testUser, (error) => {
      util.debug('Err! Trainers name is too difficult, cannot read this one.', error);
    }, (oneUser) => {
      expect(oneUser.id).to.be.equal(testUser.id);
      done();
    });
  });

  // -------------------------- 1 User Test Creater ----------------------------//
  it('Create Your Own Pokemon', () => {
    expect(testUser.id).to.not.be.null;
  });

  // -------------------------- 1 User Test Updater ----------------------------//

  it('Update Your Pokemon', (done) => {
    const updateUser = {
      id: testUser.id,
      name: 'Jesse',
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
