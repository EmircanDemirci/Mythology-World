const mongoose = require("mongoose")

const mythologhySchema = new mongoose.Schema({
    mythologyTitle:String,
    mythologyDescription:String,
    category:String,
    user:String
})




module.exports = mongoose.model("Mythology" , mythologhySchema)