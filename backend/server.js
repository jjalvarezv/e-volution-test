
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
app.use(bodyParser.urlencoded({extended : false}));

// Cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


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
