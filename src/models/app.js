const db = require('./db');


// -------------------------- Apps ----------------------------//


// Read All (.all)

exports.all = (err, success) => {
  db.app.all().then(success).catch(err);
};

// Create One (.add)

exports.add = (payload, err, success) => {
  db.app.add(payload).then(success).catch(err);
};

// Read One (.one)

exports.one = (payload, err, success) => {
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
};

// Update One (.update)

exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};
