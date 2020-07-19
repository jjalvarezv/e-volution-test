
const Task = require('../models/Task');

module.exports = { 

    createTask: function(req, res) {
        
        const task = new Task({
            name: req.body.name,
            priority: req.body.priority,
            expirationDate: req.body.expirationDate,
            owner: req.body.owner
        })

        // Save the new task in the database
        task.save((err, savedTask) => {

            if (err) return res.status(500).send({message: 'Server error'});
            return res.status(200).send({savedTask});
        });
    },

    updateTask: function(req, res) {

        const taskId = req.params.id; // param send by url
        const task = {
            name: req.body.name,
            priority: req.body.priority,
            expirationDate: req.body.expirationDate
        }

        Task.findOneAndUpdate({_id: taskId}, task, {new: true}, (err, updatedTask) => {

            if (err)  return res.status(500).send({message: 'Server Error'});
            if (!updatedTask) return res.status(404).send({message: 'Task not Found'});
            
            // Task data send to the frontend
            taskData = {
                name: updatedTask.name,
                priority: updatedTask.priority,
                expirationDate: updatedTask.expirationDate,
                owner: updatedTask.owner
            };
            return res.status(200).send({taskData});
        });
    },

    getTask: function(req, res) {

        const taskId = req.params.id;

        if (taskId == undefined){
            console.log('######')
            Task.find({}, (err, tasks) => {
                if (err) return res.status(500).send({message: 'Server Error'});
                if (!tasks) return res.status(404).send({message: 'Task Not Found'});
                
                return res.status(200).send(tasks);
            });
        } else {
            Task.findOne({_id: taskId}, (err, taskFound) => {

                if (err) return res.status(500).send({message: 'Server Error'});
                if (!taskFound) return res.status(404).send({message: 'Task Not Found'});
                
                return res.status(200).send({taskData: taskFound});
            })
        }

        
    },

    deleteTask: function(req, res) {

        const taskId = req.params.id;
        console.log('#######'+ taskId);

        Task.findOneAndDelete({_id: taskId}, (err, deletedTask) => {

            if (err) return res.status(500).send({message: 'Server Error'});
            if (!deletedTask) return res.status(404).send({message: 'Task Not Found'});
            
            return res.status(200).send({deletedTask});
        })
    }
}
