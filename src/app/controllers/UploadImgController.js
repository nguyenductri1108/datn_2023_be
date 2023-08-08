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

    async multipleUpload(req, res) {
        const cloudinaryImageUploadMethod = async (file) => {
            return new Promise((resolve) => {
                cloudinary.uploader.upload(file, (err, res) => {
                    if (err) return res.status(500).send("upload image error");
                    resolve({
                        res: res.secure_url,
                    });
                });
            });
        };
        console.log("Multiple upload");
        try {
            const urls = [];
            const files = req.files;
            for (const file of files) {
                const { path } = file;
                const newPath = await cloudinaryImageUploadMethod(path);
                urls.push(newPath);
            }
            res.send(urls);
        } catch (err) {
            res.status(401).send(err);
        }

        // const product = new Product({
        //   name: req.body.name,
        //   productImages: urls.map( url => url.res ),
        // });
    }
}

module.exports = new UploadImgController();
