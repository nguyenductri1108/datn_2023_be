const express = require("express");
const router = express.Router();
const userRouter = require("./homeRoutes/user");

router.use("/home", userRouter);

module.exports = router;
