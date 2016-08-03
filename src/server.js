// Links up to Dependencies
var express = require('express');

// Links up to Dependencies
var body_parse = require('body-parser');

// Web Sever
var app = express();

// Sets up project port
var port = 3000;

// URL Schema
app.use('/api/v1', require('../routes/api.js')(express));

// Starts Server
var server = app.listen(port, function(){
    console.log('Server Running On:', port);
  });

  // Makes the server accesible
  module.exports = server;
