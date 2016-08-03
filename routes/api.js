// Server.js Needs This File to Access
  module.exports = function(express){
    var router = express.Router();

    router.get('/',function(req,res){
      res.json({wassup: 'humans'});
    });

    router.get('/status', function(req,res){
      res.json({healthy: true});
    });

    //----------------------- All Apps ---------------------//
    router.get('/users', function(req,res){

    //All Apps Info
    router.get('/apps', function(req,res){
      res.json({
        id: "32818-001",
        title: "Trainer's Gym",
        description: "An API that can be used to operate inside of a Pokemon gym for users.",
        releaseDate: "2017-010-13T22:12:20.000ZUTC",
        createdAt: "s2016-05-13T22:12:20.000ZUTC",
        updatedAt: "2016-008-13T22:12:20.000ZUTC",
  };
