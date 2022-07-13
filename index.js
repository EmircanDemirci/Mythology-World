const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

mongoose
    .connect("mongodb://EmircanDemirci:vxpOJnb4JVWbACjz@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true")
    .then(()=>{
        const app = express()
        app.use("/" , routes)
        app.listen(5000,()=>{
            console.log("Server has started!")
        })
    })