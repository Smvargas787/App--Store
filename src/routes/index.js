// Server.js Needs This File to Access
module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Route Paths
  router.use('/api/v1', require('./api/user')(express));
  router.use('/api/v1', require('./api/app')(express));

  return router;
};
