const db = require('./db');
const util = require('../../lib/util');


// -------------------------- Apps ----------------------------//


// Read All (.all)

exports.all = (err, success) => {
  // DEBUG==True Hit Route
  util.debug('Trainers Pokemon Balls Located in the Create app DB Module', success);
  db.app.findAll().then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Trainer Gym App Created In DB', success);
};

// Create One (.add)

exports.add = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Trainers Pokemon Balls located in the findAll apps DB Module', success);
  db.app.create(payload).then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Trainer Gym FindAll App In DB Initiated', success);
};

// Read One (.one)

exports.one = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Trainers Pokemon Balls located in the find app DB Module', success);
  db.app.find({
    where: {
      id: payload.id,
    },
      // Defined by sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Trainer Gym find App in DB Initiated', success);
};

// Update One (.update)

exports.update = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Trainers Pokemon Balls located in the Updated app Module', success);
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  // DEBUG==True Hit Route
  util.debug('Trainer Gym Updated App in DB Initiated', success);
};

// Delete One (.remove)

exports.remove = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Trainers Pokemon Balls lost in the Destroyed app Module', success);
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Trainers Gym Destroyed App in DB Initiated', success);
};
