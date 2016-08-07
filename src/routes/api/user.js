const user = require('../../models/user');

module.exports = (express) => {
  const router = express.Router();

      return router;
};


// ----------------------- Users ---------------------//

// Read All (.all)

  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });
