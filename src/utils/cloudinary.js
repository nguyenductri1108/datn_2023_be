const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "tricloud12",
    api_key: "123288539452329",
    api_secret: "nLpJdFmxcW-yCPgzhMd8uOx1qeo",
});

module.exports = cloudinary;
