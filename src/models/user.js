const db = require('./db');
const util = require('timeto_go');


  // ----------------------- Users ---------------------//

  // Create One (.add)

exports.add = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon Found in the findAll Users DB Module', success);
  db.user.create(payload).then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Pokemon has been located in the findAll DB', success);
};

  // Read All (.all)

exports.all = (err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon Found in the Create User DB Module', success);
  db.user.findAll().then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Pokemon has been Created In DB', success);
};


  // Read One (.one)

exports.one = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon found in the find User DB Module', success);
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
  // DEBUG==True Hit Route
  util.debug('Pokemon has been located in the find one DB', success);
};

  // Update One (.update)

exports.update = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon found in the Updated User DB Module', success);
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
    // DEBUG==True Hit Route
    util.debug('Pokemon located in the Updated section In DB', success);
  }).catch(err);
};

  // Delete One (.remove)

exports.remove = (payload, err, success) => {
  // DEBUG==True Hit Route
  util.debug('Pokemon found in the Removed User Module', success);
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  // DEBUG==True Hit Route
  util.debug('Pokemon lost in the Removed section In DB', success);
};
