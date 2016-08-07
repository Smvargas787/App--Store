const app = require('../../models/app');

module.exports = (express) => {
  const router = express.Router();

  // ------------------------- All Apps ----------------------------//

// Read Apps (.all)

  router.get('/apps', (req, res) => {
    app.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Create One App (.add)

  router.post('/apps', (req, res) => {
    app.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// // Read One (.one)
//
//   router.get('/apps/:id', (req, res) => {
//     req.body.id = req.params.id;
//     app.find(req.body, (err) => {
//       res.status(500).json(err);
//     }, (data) => {
//       res.status(200).json(data);
//     });
//   });
//


  return router;
};
