const cloudinary = require("../../utils/cloudinary");

class UploadImgController {
    async index(req, res) {
        try {
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: bookImgs,
                },
                function (error, result) {
                    console.log(result);
                    console.log(error);
                }
            );
            res.send(result);
        } catch (err) {
            res.status(401).send(err);
        }
    }
}

module.exports = new UploadImgController();
