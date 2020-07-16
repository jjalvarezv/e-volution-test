
const express = require('express');
//const tast_controller = require('../controllers/task.controller');

const router = express.Router();

router.get('/', (req, res) => res.json({aaa: 'All going well'}));

module.exports = router;
