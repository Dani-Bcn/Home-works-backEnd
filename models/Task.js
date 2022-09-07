const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        rquired:true
    }
})

module.exports = model("Task", taskSchema)