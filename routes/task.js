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
    router.get("/", async (req,res,next)=>{    
        try{    
            const task = await Task.find({})
            res.status(201).json({ data:task});    
        }catch(error){
            console.log(error)
        }        
    })

    router.get("/:id", async (req,res,next)=>{
        const { id } = req.params
            try{    
                const task = await Task.findById(id)
                res.status(201).json({ data:task});    
            }catch(error){
                console.log(error)
            }        
    })
    router.delete("/:id", async (req,res,next)=>{
        const { id } = req.params
            try{    
                const task = await Task.findByIdAndDelete(id)
                res.status(201).json({ data:task});    
            }catch(error){
                console.log(error)
            }        
    })


module.exports = router;