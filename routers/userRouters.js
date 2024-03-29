const routers = require("express").Router()

routers.get("/",(req,res)=>{
    res.send("users")
})


module.exports = routers