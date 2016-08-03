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
        id1: "32818-001",
        title1: "Trainer's Gym",
        description1: "An API that can be used to operate inside of a Pokemon gym for users.",
        releaseDate1: "2017-010-13T22:12:20.000ZUTC",
        createdAt1: "s2016-05-13T22:12:20.000ZUTC",
        updatedAt1: "2016-008-13T22:12:20.000ZUTC",

        id2: "330571-002",
        title2: "Battle Field",
        description2: "An app designed to gather up all of the fellow trainer's in one area to defend their levels.",
        releaseDate2: "2018-03-05T22:9:20.000ZUTC",
        createdAt2: "2016-01-05T22:9:20.000ZUTC",
        updatedAt2: "2016-12-05T22:9:20.000ZUTC",

        id3: "63131-003",
        title3: "Pokedex",
        description3: "An app created to share and engage with others of comic book characters.",
        releaseDate3: "2018-08-05T22:12:00.000ZUTC",
        createdAt3: "2018-08-05T22:12:00.000ZUTC",
        updatedAt3: "2018-08-05T22:12:00.000ZUTC",

      });
  });

        //----------------------- All Users ---------------------//

      router.get('/users', function(req,res){
        res.json({
          user1: {
          id: "025",
          name: "Pikachu",
          Type: "Electric",
        },

        user2: {
        id: "004",
        name: "Charmander",
        Type: "Fire",
      },

        user3: {
        id: "007",
        name: "Squirtle",
        Type: "Water",
      },

      });
    });


    //----------------------- Solo App ---------------------//

    router.get('/apps/:id', function(req,res){
      res.json({
        id3: "63131-003",
        title3: "Pokedex",
        description3: "An app created to share and engage with others of comic book characters.",
        releaseDate3: "2018-08-05T22:12:00.000ZUTC",
        createdAt3: "2018-08-05T22:12:00.000ZUTC",
        updatedAt3: "2018-08-05T22:12:00.000ZUTC",

  });

    });


    //----------------------- Solo User ---------------------//

    router.get('/users/:id', function(req,res){
        res.json({
          user2: {
          id: "004",
          name: "Charmander",
          Type: "Fire",
          }
        });
      });

    return router;
    };
