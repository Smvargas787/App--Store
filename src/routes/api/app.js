const app = require('../../models/app');
const util = require('../../../lib/util');

module.exports = (express) => {
  const router = express.Router();

  // -------------------------- Apps ----------------------------//

// Read All (.all)

  router.get('/apps', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Gym Pathway Activated: GET /apps', true, 'log');
    app.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Trainer To: FindAll Apps', data);
      res.status(200).json(data);
    });
  });

// Create One (.add)

  router.post('/apps', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Gym Pathway Activated: POST /apps', true, 'log');
    app.add(req.body, (err) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Trainer To: Create New App Error', false);
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Trainer To: Create New App', data);
      res.status(200).json(data);
    });
  });

// Read One (.one)

  router.get('/apps/:id', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Gym Pathway Activated: GET /apps:id', true, 'log');
    req.body.id = req.params.id;
    app.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Trainer To: Read One App', data);
      res.status(200).json(data);
    });
  });

// Update One (.update)

  router.post('/apps/:id', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Gym Pathway Activated: POST /apps:id', true, 'log');
    req.body.id = req.params.id;
    app.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Trainer To An: Updated One App', data);
      res.status(200).json(data);
    });
  });

// Delete One (.remove)

  router.delete('/apps/:id', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Gym Pathway Activated: DELETE /apps:id', true, 'warn');
    req.body.id = req.params.id;
    app.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Trainer Back To: Destroyed One App', data);
      res.status(200).json(data);
    });
  });

  return router;
};
