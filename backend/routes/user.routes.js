'use strict'

const express = require('express');
const user_controller = require('../controllers/user.controller');

const router = express.Router();

// Routes for User

router.post('/saveUser', user_controller.saveUser);

module.exports = router;
