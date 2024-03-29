const { default: mongoose } = require("mongoose");
const { v4 } = require("uuid");

const userSchema = {
    name:{
        type: String,
        require: true
    },
    mobile:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    id:{
        type: String,
        default: v4()
    },
    createdON:{
        type: Date,
        default: Date.now
    },
}


module.exports = mongoose.model("usersDAta",userSchema)