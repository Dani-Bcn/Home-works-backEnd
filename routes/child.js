const router = require("express").Router()
const Child = require("../models/Child")
// @desc   Create new child
// @route   POST /api/v1/child
// @access  Public
router.post("/", async (req,res,next)=>{
    const {name, yearOfBirth, image, tasks} = req.body
        try{
            const child = await Child.create({name, yearOfBirth, image, tasks})
            res.status(201).json({ data:child });
        }catch(error){
            netx(error)
        }
    })
// @desc   Find all child
// @route   GET /api/v1/child
// @access  Public
router.get("/", async (req,res,next)=>{
        try{
            const child = await Child.find({})
            res.status(201).json({ data:child}); 
        }catch(error){
            next(error)
        }
    })
// @desc   Find one child
// @route   GET/api/v1/child
// @access  Public
    router.get("/:id", async (req,res,next)=>{
        const { id } = req.params
        try{
            const child = await Child.findById(id).populate('tasks');
            res.status(201).json({ data:child }); 
        }catch(error){
            next(error)
        }
    })
// @desc   Delete  child
// @route   DELETE /api/v1/child
// @access  Public
    router.delete("/:id", async (req,res,next)=>{
        const { id } = req.params
        try{
            const child = await Child.findByIdAndDelete(id)
            res.status(201).json({ data:child }); 
        }catch(error){
            next(error)
        }
    })
// @desc   Edit child
// @route   PUT/api/v1/child
// @access  Public
    router.put('/:id', async (req, res, next) => {
        const { id } = req.params
        const { name, yearOfBirth, image, tasks }= req.body         
        try {              
          const updateChild = await Child.findByIdAndUpdate(id, req.body,{new:true});
          res.status(202).json({ data: updateChild })
        } catch (error) {
          next(error);
        }       
    });
// @desc   Add task child
// @route   PUT /api/v1/child
// @access  Public  
router.put('/addTask/:childId/:taskId', async (req, res, next) => {
    const { childId, taskId } = req.params;
    try {
      const child = await Child.findById(childId);
      child.tasks.push(taskId);
      child.save();
      res.status(202).json({ data: child })
    } catch (error) {
       next(error);
    }
});
module.exports = router;