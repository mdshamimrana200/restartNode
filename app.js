require("./model/databaseConnect")
const express = require("express");
const router = require("./routers/userRouters");
const cors = require("cors");
const app = express();


const corsConfig ={
    origin: "*",
    Credential: true,
    methods : [ "GET","POST","PUT","DELETE"]
}
app.options("",cors(corsConfig))

app.use(express.urlencoded({extended:true}))
app.use(express.json(corsConfig))

app.get("/",(req,res)=>{
    res.status(200).send("shamimrana RANA")
})

app.use((req,res)=>{
    res.status(404).send("router not found err")
})

module.exports = app ;