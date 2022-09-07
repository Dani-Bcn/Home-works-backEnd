const router = require("express").Router()
const Task =require("../models/Task")

router.post("/", async (req,res,next)=>{
    const {name, image, description} = req.body
        try{
            const task = await Task.create( {name, image, description})
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
            next(error)
        }        
    })

    router.get("/:id", async (req,res,next)=>{
        const { id } = req.params
            try{    
                const task = await Task.findById(id)
                res.status(201).json({ data:task});    
            }catch(error){
               next(error)
            }        
    })
    router.delete("/:id", async (req,res,next)=>{
        const { id } = req.params
            try{    
                const task = await Task.findByIdAndDelete(id)
                res.status(201).json({ data:task});    
            }catch(error){
                next(error)
            }        
    })
    router.put('/:id', async (req, res, next) => {
        const { id } = req.params
        const { name, image, description }= req.body      
      
        try {     
         
          const updateTask = await Task.findByIdAndUpdate(id, req.body,{new:true});
          res.status(202).json({ data: updateTask })
        } catch (error) {
          next(error);
        }       
      });

module.exports = router;