const { default: mongoose } = require("mongoose");
const { dev } = require("../config/config");
const url = dev.DB.URL



 mongoose.connect(url)
    .then(()=>console.log("connected"))
    .catch((err)=>console.log("not connected" + err)) 
