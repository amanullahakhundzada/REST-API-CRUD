const express=require("express")
const router=express.Router();
const Alien=require("../models/alien")

router.get("/", async (req,res)=>{
  try {
    const aliens= await Alien.find()
    res.json(aliens)
  } catch (error) {
    res.send("Error"+error)
  }
})
router.get("/:id",async(req,res)=>{
    try {
        const alien= await Alien.findById(req.params.id)
        res.json(alien)
    } catch (error) {
        res.send(error)
    }
})
router.post("/", async (req,res)=>{
    const alien =new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
})
try {
    const a1 = await alien.save()
    res.json(a1)
} catch (error) {
    res.send("Error"+error)
    
}
})
router.patch("/:id",async (req,res)=>{
    try {
        const alien= await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1=await alien.save()
        res.json(a1)

    } catch (error) {
         res.send("error"+error)        
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const alien= await Alien.findById(req.params.id)
        const a1 =await alien.remove()
        res.json(a1)
    } catch (error) {
        res.send("Error"+ error).status(404)
        
    }
})
module.exports=router;