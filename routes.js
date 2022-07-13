const express = require("express")
const Mythology = require("./models/Mythologys")
const router = express.Router()

router.get("/mythologys/turkish" , async (req,res)=>{
    const myths = await Mythology.find({category:"Turkish Mythology"})
    res.send(myths)
})
router.get("/mythologys/greek" , async (req,res)=>{
    const myths = await Mythology.find({category:"Greek Mythology"})
    res.send(myths)
})
router.get("/mythologys/nordic" , async (req,res)=>{
    const myths = await Mythology.find({category:"Nordic Mythology"})
    res.send(myths)
})

module.exports = router