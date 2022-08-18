const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper( async (req, res) => { //asyncWrapper is a function that takes a function as an argument and returns a function that takes the same arguments as the function that we want to wrap 
        const tasks = await Task.find({});
        res.status(200).json({tasks});
}
);

const createTask = asyncWrapper( async (req, res) => {
    
        const task = await Task.create(req.body);
        res.status(201).json({task});
});

const getTask = asyncWrapper( async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            res.status(404).json({msg: 'Task not found'});
        }
        else{
            res.status(200).json({task});
        }
});

const deleteTask = asyncWrapper( async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndDelete({_id:taskID});
        if(!task){
            res.status(404).json({msg: 'Task not found'});
        }
        else{
            res.status(200).json({task});
        }
});

const updateTask = asyncWrapper( async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{new:true,runValidators:true});
        if(!task){
            res.status(404).json({msg: 'Task not found'});
        }
        else{
            res.status(200).json({task});
        }
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}