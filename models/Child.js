const {mongoose, Schema, model} = require("mongoose")

const childSchema = new Schema({

    name:{
        type:String,
        required:true
    },   
    yearOfBirth:{
        type:Number,      
    },
    imageUrl:{
        type:String,      
    },
    tasks: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Task',
      },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    points:{
        type:Number
    },
    cups:{
        type:Number
    }

})
module.exports = model("Child", childSchema)

