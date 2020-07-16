
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const mongoose = require('mongoose');

const app = express();


// Routes files
const user_router = require('./routes/user.routes');
const task_router = require('./routes/task.routes');


// Middleweares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Cors
app.use(cors());

// Routes
app.use('/api/user', user_router);
app.use('/api/task', task_router);


// ------------------ Coneccion y servidor ------------------

// require the database connection
const DB = require('./config/db');
// init DB
DB();

// server
app.listen(properties.PORT, () => {
    console.log('Running on port https:/localhost:'+properties.PORT);
})
