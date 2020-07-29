require('rootpath')();
require("dotenv").config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const uuid = require("uuid/v4");
const path = require("path")
const mongoose = require("mongoose");

const DEVELOPING = true;

//const stripe = require("stripe")("");


app.use(express.static(path.join(__dirname, "client", "build")))

// Setup express app
app.use(express.json());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
app.use(cors())

// use JWT auth to secure the api
app.use(jwt());
console.log("authenticated")

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/payment', require('./payment/payment.controller'))
app.use('/aws', require('./aws/aws.controller.js'))
app.use('/templates', require('./templates/templates.controller'))

app.use(errorHandler);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

const port = process.env.PORT || 5000;
if(DEVELOPING){
    app.listen(port, () => console.log(`Development server up and running on port ${port}.`));
}
else{
    https.createServer({
        key: fs.readFileSync("../../domain.key"),
        cert: fs.readFileSync("../../domain.crt"),
    }, app).listen(port, () => console.log(`Live server up and running on port ${port}.`))
}
