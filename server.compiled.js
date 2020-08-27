"use strict";

require('rootpath')();

var express = require('express');

var app = express();

var cors = require('cors');

var bodyParser = require('body-parser');

var jwt = require('./_helpers/jwt');

var errorHandler = require('./_helpers/error-handler');

var uuid = require("uuid/v4");

var fs = require("fs");

var https = require("https");

var path = require('path');

var mongoose = require("mongoose"); // var request = require('request');
// var querystring = require('querystring');
// var cookieParser = require('cookie-parser');


var DEVELOPING = true;

if (process.env.NODE_ENV == "production") {
  DEVELOPING = false;
  console.log("-----Production Mode!-----");
} else {
  console.log("-----Dev Mode-----");
} // Setup express app


app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

if (!DEVELOPING) {
  app.use(express["static"](path.join(__dirname, "client/build")));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.use(cors()); // use JWT auth to secure the api

app.use(jwt());
console.log("authenticated"); // api routes

app.use('/users', require('./users/users.controller'));
app.use('/payment', require('./payment/payment.controller'));
app.use('/aws', require('./aws/aws.controller.js'));
app.use('/templates', require('./templates/templates.controller')); //app.use('/spotify', require('./spotify/spotify.controller'))

app.use(errorHandler);
var port = process.env.PORT || 5000; // if(DEVELOPING){

app.listen(port, function () {
  return console.log("Development server up and running on port ".concat(port, "."));
}); // }
// else{
//     https.createServer({
//         key: fs.readFileSync("../../domain.key"),
//         cert: fs.readFileSync("../../domain.crt"),
//     }, app).listen(port, () => console.log(`Live server up and running on port ${port}.`))
// }
