const { getUser, getAllUser, getOneUser, creatUser, deleteUser, updateUser } = require("../controllers/usercontrollers")

const router = require("express").Router()

router.get("/",getAllUser)
router.get("/:name",getOneUser)
router.post("/",creatUser)
router.put("/:name",updateUser)
router.delete("/",deleteUser)

module.exports = router