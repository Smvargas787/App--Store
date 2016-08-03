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
    router.get('/apps', function(req,res){
    res.json({
      id: "32818-001",
      title: "Trainer's Gym",
      description: "An API that can be used to operate inside of a Pokemon gym for users.",
      artAssests: [
        { title: "Ash", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg"},
        { title: "Misty", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg"},
      ],
      releaseDate: "2017-05-13T22:12:20.000ZUTC",
      createdAt: "s2016-05-13T22:12:20.000ZUTC",
      updatedAt: "2016-08-13T22:12:20.000ZUTC",
      user: {
        id: "46214557",
        name: "Selena Vargas",
        age: "20",
        dob: "1995-10-30:7:59.000ZUTC",
        nationality: "Puerto Rican"
      },

      id2: "33051-002",
      title2: "Battle Field",
      description2: "An API that can be used to operate inside of a Pokemon field for users.",
      artAssests2: [
        { title: "Brock", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg"},
        { title: "Meow", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg"},
      ],
      releaseDate2: "2016-05-13T22:12:20.000ZUTC",
      createdAt2: "s2015-05-13T22:12:20.000ZUTC",
      updatedAt2: "2016-04-13T22:12:20.000ZUTC",
      user2: {
        id: "96002",
        name: "Rashal Ashy",
        age: "21",
        dob: "1995-07-27:7:59.000ZUTC",
        nationality: "Lebanonese"
      },
      

  }
