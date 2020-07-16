
const mongoose = require('mongoose');
const properties = require('./properties');

module.exports = () => {

    // Connection to de database named admin-tasks
    mongoose.connect(properties.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then((db) => console.log('Connected to DataBase named admin-tasks'))
        .catch((err) => console.log(err));
    
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Disconnected');
            process.exit(0);
        })
    });

}
