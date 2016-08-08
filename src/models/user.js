const db = require('./db');

  // ----------------------- Users ---------------------//


  // Read All (.all)

exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
};

  // Create One (.add)

exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
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
