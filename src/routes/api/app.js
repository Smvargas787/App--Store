const app = require('../../models/app');

module.exports = (express) => {
  const router = express.Router();

  // ------------------------- All Apps ----------------------------//

// Read All (.all)

  router.get('/apps', (req, res) => {
    app.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Create One (.add)

  router.post('/apps', (req, res) => {
    app.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Read One (.one)

  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Update One (.update)

  router.post('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Delete One (.remove)

  router.delete('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
