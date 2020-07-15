'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }

});

// Mongoose model save in collection users
module.exports = mongoose.model('User', UserSchema);
