
const mongoose = require('mongoose');

// Connection to de database named admin-tasks
mongoose.connect('mongodb://localhost/admin-tasks',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to DataBase named admin-tasks');
    })
    .catch( () => {
        console.log('Connection failed');
    });

//module.exports = mongoose;