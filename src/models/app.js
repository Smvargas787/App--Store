const db = require('./db');


// -------------------------- Apps ----------------------------//


// Read All (.all)

exports.all = (err, success) => {
  db.app.all().then(success).catch(err);
};

// // Create One (.add)
//
// exports.add = (payload, err, success) => {
//   db.app.add(payload).then(success).catch(err);
// };
