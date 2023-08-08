const express = require("express");
const router = express.Router();

const UserController = require("../app/controllers/UserController");

router.get("/:id", UserController.getUserData);

router.post("/:id/update", UserController.updateUserData);

module.exports = router;
