const expect = require('chai').expect;
const app = require('../src/models/app');
const util = require('../lib/util');

let testApp = {};

  // -------------------------- Tests Set Up ----------------------------//
describe('Trainer Gyms', () => {
  beforeEach((done) => {
    const mockApp = {
      title: 'WheresPikachu?',
      description: 'Reverse game of wheres waldo',
      releaseDate: '2016-12-01',
    };

  // -------------------------- Creating Mocha Stub ----------------------------//
    app.add(mockApp, (error) => {
      util.debug('Error! Pikachus cannot be man created.', error);
    }, (newDBapp) => {
      testApp = newDBapp;
      done();
    });
  });

  // -------------------------- Mutiple Apps DB Stopper ----------------------------//
  afterEach((done) => {
    app.remove(testApp, (error) => {
      util.debug('Not Possible to Delete A Pikachu in this game', error);
    }, (deletedReply) => {
      expect(deletedReply).to.be.equal(1);
      done();
    });
  });

  // -------------------------- Reading Tests ----------------------------//
  it('Find All Pikachus', (done) => {
    app.all((error) => {
      util.debug('Failed to find all the pikachus in Apps', error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(1);
      done();
    });
  });

  // -------------------------- 1 App Test Reader ----------------------------//
  it('Find One Pikachu', (done) => {
    app.one(testApp, (error) => {
      util.debug('Cannot find One Pikachu in this App anywhere', error);
    }, (oneApp) => {
      expect(oneApp.id).to.be.equal(testApp.id);
      done();
    });
  });

  // -------------------------- 1 App Test Creater ----------------------------//
  it('Create A Pikachu', () => {
    expect(testApp.id).to.not.be.null;
  });

  // -------------------------- 1 App Test Updater ----------------------------//
  it('Update A Pikachus Power', (done) => {
    const updateApp = {
      id: testApp.id,
      title: 'Poke Hide & Seek',
      description: 'An ispy of random sightings of pokemon around the globe',
      releaseDate: '2016-10-30',
    };
    app.update(updateApp, (error) => {
      util.debug('Failed to Update New Pokemon Game App', error);
    }, (updateDBApp) => {
      expect(updateDBApp.name).to.be.equal(updateApp.name);
      testApp = updateDBApp;
      done();
    });
  });
});
