'use strict'

const express = require('express');
const user_controller = require('../controllers/user.controller');

const router = express.Router();

// Routes for User

router.post('/saveUser', user_controller.saveUser); // save user in db
router.post('/login', user_controller.login);

module.exports = router;
