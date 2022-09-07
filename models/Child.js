const {Schema, model} = require("mongoose")

const childSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    yearOfBirth:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    tasks:{
        type:Array,        
    }
    
})
module.exports = model("Child", childSchema)

