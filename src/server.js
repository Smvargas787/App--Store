// Links up to Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// DEBUG = TRUE Statment
const util = require('timeto_go');
// Web Sever
const app = express();

// Body Parser Grabs POST Data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Sets up project port with DB
const port = process.env.PORT || 3000;

// URL Scheme
app.use('/', require('./routes')(express));

// Route Paths
app.use('/api/v1', require('./routes/api/user')(express));
app.use('/api/v1', require('./routes/api/app')(express));

// Starts Server
const server = app.listen(port, () => {
  util.debug('Server Running On:', port);
});

  // Makes the server accesible
module.exports = server;
