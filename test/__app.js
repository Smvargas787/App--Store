const expect = require('chai').expect;
const app = require('../src/models/app');
const util = require('../lib/util');

let testApp = {};

  // -------------------------- Tests Set Up ----------------------------//
  describe('Apps', () => {
    beforeEach((done) => {
      const mockApp = {
        title: 'WheresPikachu?',
        description: 'Reverse game of wheres waldo',
        releaseDate: '2016-12-01'
      };

    // -------------------------- Creating Mocha Stub ----------------------------//
      app.create(mockApp, (error) => {
        util.debug('Error! Pikachus cannot be man created.', error);
      }, (newDBapp) => {
        testApp = newDBapp;
        done();
      });
    });

    // -------------------------- Mutiple Apps DB Stopper ----------------------------//
      afterEach((done) => {
        app.destroy(testApp, (error) => {
          util.debug('Not Possible to Delete A Pikachu', error);
        }, (deletedReply) => {
          expect(deletedReply).to.be.equal(1);
          done();
        });
      });

      // -------------------------- Reading Tests ----------------------------//
        it('Read All', (done) => {
          app.findAll((error) => {
            util.debug('Failed to find all the pikachus in Apps', error);
          }, (allApps) => {
            expect(allApps.length).to.be.above(1);
            done();
          });
        });

        // -------------------------- 1 App Test Reader ----------------------------//
            it('Read One', (done) => {
              app.find(testApp, (error) => {
                util.debug('Cannot find One Pikachu in this App anywhere', error);
              }, (oneApp) => {
                expect(oneApp.id).to.be.equal(testApp.id);
                done();
              });
            });

        // -------------------------- 1 App Test Creater ----------------------------//
          it('Create One', () => {
            expect(testApp.id).to.not.be.null;
          });
