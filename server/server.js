const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

// Setup express app
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    res.send('Welcome to Express');
  });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
// Configure Mongo
// const db = "mongodb://localhost/313-demo-mern-db";

// Connect to Mongo with Mongoose
// mongoose.connect(
//         db,
//         { useNewUrlParser: true }
//     )
//     .then(() => console.log("Mongo connected"))
//     .catch(err => console.log(err));

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));