const routers = require("./routers/userRouters")
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("./model/databaseConnect")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname + "/view/index.html")
})
app.use("/users",routers)

app.use((req,res)=>{
    res.status(404).send("router not found err")
})

module.exports = app ;