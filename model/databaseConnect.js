const { default: mongoose } = require("mongoose");
const { dev } = require("../config/config");
const url = dev.DB.URL ||"mongodb://1270.0.0.1:17027/TESTdatabase"



 mongoose.connect(url)
    .then(()=>console.log("connected"))
    .catch((err)=>console.log("not connected" + err)) 
