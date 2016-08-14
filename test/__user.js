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
