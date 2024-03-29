const { getUser } = require("../controllers/controller")

const routers = require("express").Router()



routers.get("/",getUser)


module.exports = routers