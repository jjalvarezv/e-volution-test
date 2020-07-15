
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3700;

// require the database connection
require('./db');

// server
app.listen(port, () => {
    console.log('Running on port https:/localhost/'+port);
})


// ------------------------


// Routes files

// Middleweares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Cors
app.use(cors());

// Routes

// Export

module.exports = app;
