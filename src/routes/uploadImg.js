const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");

const UploadImgController = require("../app/controllers/UploadImgController");

router.post("", upload.single("image"), UploadImgController.index);

module.exports = router;
