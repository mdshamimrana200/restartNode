require("./model/databaseConnect")
const express = require("express");
const cors = require("cors");
const app = express();
const routers = require("./routers/userRouters")


const corsConfig ={
    origin: "*",
    Credential: true,
    methods : [ "GET","POST","PUT","DELETE"]
}
app.options("",cors(corsConfig))

app.use(express.urlencoded({extended:true}))
app.use(express.json(corsConfig))



app.get("/",(req,res)=>{
    res.status(200).send("shamimrana shamimmmmmmmmmmmmmmm")
})
app.use("/users",routers)

app.use((req,res)=>{
    res.status(404).send("router not found err")
})

module.exports = app ;