// Server.js Needs This File to Access
module.exports = function(express){
  var router = express.Router();

  router.get('/',function(req,res){
    res.json({wassup: 'humans'});
  });

  router.get('/status', function(req,res){
    res.json({healthy: true});
  });

  
}
