// Server.js Needs This File to Access
  module.exports = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({ wassup: 'humans' });
    });

    router.get('/status', (req, res) => {
      res.json({ healthy: true });
    });

    // ------------------------- All Apps ----------------------------//


    router.get('/apps', (req, res) => {
      res.json([
        {
          id: '32818-001',
          title: "Trainer's Gym",
          description: 'An API that can be used to operate inside of a Pokemon gym for users.',
          releaseDate: '2017-010-13T22:12:20.000ZUTC',
        },
        {
          id: '330571-002',
          title: 'Battle Field',
          description: "An app designed to gather up all of the fellow trainer's in one area to defend their levels.",
          releaseDate: '2018-03-05T22:9:20.000ZUTC',
        },
        {
          id: '63131-003',
          title: 'Pokedex',
          description: 'An app created to share and engage with others of comic book characters.',
          releaseDate: '2018-08-05T22:12:00.000ZUTC',
        },
      ]);
    });

        // ----------------------- All Users ---------------------//

    router.get('/users', (req, res) => {
      res.json([

        {
          user: {
            id: '025',
            name: 'Pikachu',
            type: 'Electric',
          },
        },

        {
          user: {
            id: '004',
            name: 'Charmander',
            type: 'Fire',
          },
        },

        {
          user: {
            id: '007',
            name: 'Squirtle',
            type: 'Water',
          },
        },
      ]);
    });


    // ----------------------- Solo App ---------------------//

    router.get('/apps/:id', (req, res) => {
      res.json({
        id: '63131-003',
        title: 'Pokedex',
        description: 'An app created to share and engage with others of comic book characters.',
        releaseDate: '2018-08-05T22:12:00.000ZUTC',

      });
    });


    // ----------------------- Solo User ---------------------//

    router.get('/users/:id', (req, res) => {
      res.json({
        user: {
          id: '004',
          name: 'Charmander',
        },
      });
    });

    return router;
  };
