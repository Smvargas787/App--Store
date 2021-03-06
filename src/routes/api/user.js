const user = require('../../models/user');
const util = require('timeto_go');


module.exports = (express) => {
  const router = express.Router();


// ----------------------- Users ---------------------//

// Read All (.all)

  router.get('/users', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Poke Pathway Activated: GET /users', true, 'log');
    user.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Pokemon To: FindAll Users', data);
      res.status(200).json(data);
    });
  });

// Create One (.add)

  router.post('/users', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Poke Pathway Activated: POST /users', true, 'log');
    user.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Pokemon To A: Created A New User', data);
      res.status(200).json(data);
    });
  });

  // Read One user by I.D (.one)

  router.get('/users/:id', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Poke Pathway Activated: GET /users/:id', true, 'log');
    req.body.id = req.params.id;
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Pokemon To: Read One User', data);
      res.status(200).json(data);
    });
  });

  // Read One app by I.D (.one)

  router.get('/users/:id/apps', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Poke Pathway Activated: GET /users/:id/apps', true, 'log');
    req.body.id = req.params.id;
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Pokemon To: Read One User', data);
      res.status(200).json(data.apps);
    });
  });

  // Update One (.update)

  router.post('/users/:id', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Poke Pathway Activated: POST /users/:id', true, 'log');
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Pokemon To An: Updated One User', data);
      res.status(200).json(data);
    });
  });

  // Delete One (.remove)

  router.delete('/users/:id', (req, res) => {
    // DEBUG==True Hit Route
    util.debug('Poke Pathway Activated: DELETE /users/:id', true, 'warn');
    req.body.id = req.params.id;
    user.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // DEBUG==True Hit Route
      util.debug('Model Traced Pokemon To A: Destroyed One User', data);
      res.status(200).json(data);
    });
  });


  return router;
};
