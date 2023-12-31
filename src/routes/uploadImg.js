const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");

const UploadImgController = require("../app/controllers/UploadImgController");

router.post("/", upload.single("image"), UploadImgController.index);

router.post("/multiple", upload.array("image", 3), UploadImgController.multipleUpload);

module.exports = router;
