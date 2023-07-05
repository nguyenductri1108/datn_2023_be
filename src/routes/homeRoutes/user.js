const express = require("express");
const UserController = require("../../app/controllers/HomeControllers/UserController");
const router = express.Router();

router.get("/:name/test", UserController.index);

module.exports = router;
