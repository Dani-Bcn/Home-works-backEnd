const router = require("express").Router()
const Task =require("../models/Task")

router.post("/", async (req,res,next)=>{
const {name, image, description} = req.body
try{

    const task = Task.create( {name, image, description})
    res.status(201).json({ data:task});

}catch(error){
    console.log(error)
}

})
module.exports = router;