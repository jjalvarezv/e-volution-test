
const express = require('express');
const task_controller = require('../controllers/task.controller');

const router = express.Router();

router.post('/createTask', task_controller.createTask); // create a new Task
router.put('/updateTask/:id', task_controller.updateTask); // Update task by id
router.get('/getTask/:id?', task_controller.getTask); // Query task by id
router.delete('/deleteTask/:id', task_controller.deleteTask); // Delete task by id

module.exports = router;
