const express = require('express');
const bodyParser = require('body-parser');

// to create express app
const app = express();

// to parse the requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// to parse requests of content type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to User Registration"});
});

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});