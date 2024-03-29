const routers = require("express").Router()
const {getUser} = require("../controllers/usercontrollers")


routers.get("/",getUser)


module.exports = routers