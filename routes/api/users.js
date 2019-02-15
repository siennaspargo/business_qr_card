const router = require("express").Router()
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findById)
    .post(userController.createUser)


router.route("/:id")
    .get(userController.findConnections)
    .delete(userController.removeConnection)
    .post(userController.addConnection)
    .put(userController.updateProfile)
        
module.exports = router;