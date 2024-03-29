require("./model/databaseConnect")
const express = require("express");
const path = require("path");
const router = require("./routers/userRouters");
const cors = require("cors");
const app = express();

app.use(cors());
const corsConfig ={
    origin: "*",
    Credential: true,
    methods : [ "GET","POST","PUT","DELETE"]
}

app.use(express.urlencoded({extended:true}))
app.use(express.json(corsConfig))

app.get("/",(req,res)=>{
    res.status(200).send("shamimrana")
})

app.use("/users",router)

app.use((req,res)=>{
    res.status(404).send("router not found err")
})

module.exports = app ;