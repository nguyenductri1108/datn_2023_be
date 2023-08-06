const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://nguyenductri1108thd3:tri1234@cluster0.ckc79eo.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Error connecting to MongoDB", e);
    }
}

module.exports = { connect };
