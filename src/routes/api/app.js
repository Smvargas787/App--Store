const app = require('../../models/app');

module.exports = (express) => {
  const router = express.Router();

  // -------------------------- Apps ----------------------------//

// Read All (.all)

  router.get('/apps', (req, res) => {
    app.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Create One (.add)

  router.post('/apps', (req, res) => {
    app.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Read One (.one)

  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.one(req.body, (err) => {
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
    app.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
