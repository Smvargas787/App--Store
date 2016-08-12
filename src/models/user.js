const db = require('./db');
const util = require('../../lib/util');


  // ----------------------- Users ---------------------//


  // Read All (.all)

exports.all = (err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon Found in the Create User DB Module', success);
  db.user.findAll().then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Pokemon has been Created In DB', success);
};

  // Create One (.add)

exports.add = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon Found in the findAll Users DB Module', success);
  db.user.create(payload).then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Pokemon has been located in the findAll DB', success);
};

  // Read One (.one)

exports.one = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
        // Defined by sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

  // Update One (.update)

exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

  // Delete One (.remove)

exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
