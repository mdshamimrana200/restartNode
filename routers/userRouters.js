const getUser = require("../controllers/usercontrollers")

const routers = require("express").Router()

routers.get("/",getUser)


module.exports = routers