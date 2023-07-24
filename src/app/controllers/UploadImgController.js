const cloudinary = require("../../utils/cloudinary");

class UploadImgController {
    async index(req, res) {
        console.log("upload");
        try {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "bookImgs",
            });
            res.send(result);
        } catch (err) {
            res.status(401).send(err);
        }
    }
}

module.exports = new UploadImgController();
