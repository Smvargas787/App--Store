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
