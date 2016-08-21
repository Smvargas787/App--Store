  const Sequelize = require('sequelize');

  // ENV File Loaded
  require('dotenv').config({ silent: true });

  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  });

  const user = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    hobby: {
      type: Sequelize.STRING,
    },
  });

  const app = sequelize.define('app', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    releaseDate: {
      type: Sequelize.STRING,
    },
  });

  user.hasMany(app, {
    foreignKey: 'userID',
  });

  sequelize.sync();

  exports.sequelize = sequelize;
  exports.user = user;
  exports.app = app;
