const router = require("express").Router()
const Child = require("../models/Child")

router.post("/", async (req,res,next)=>{
    const {name, yearOfBirth, image, tasks} = req.body
        try{
            const child = await Child.create( {name, yearOfBirth, image, tasks})
            res.status(201).json({ data:child });
        }catch(error){
            netx(error)
        }
    })

    router.get("/", async (req,res,next)=>{
        try{
            const child = await Child.find({})
            res.status(201).json({ data:child}); 
        }catch(error){
            next(error)
        }

    })

module.exports = router