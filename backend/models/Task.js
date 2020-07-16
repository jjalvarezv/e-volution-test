
const mongoose = require('mongoose');
const User = require('./User');

const Schema = mongoose.Schema;

const TaskShema = Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    priority: {
        type: Number,
        required: true,
        trim: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    owner: {
        type: User
    }
});
