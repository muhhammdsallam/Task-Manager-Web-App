const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters'],

    },
    completed:{
        type:Boolean,
        default:false
    },
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;