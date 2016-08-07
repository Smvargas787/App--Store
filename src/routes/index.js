// Server.js Needs This File to Access
module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

//   // routes
//   router.use('/api/', require('./api/user')(express));
//   router.use('/api/', require('./api/app')(express));
//
//   return router;
// };
