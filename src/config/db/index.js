const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/web_book");
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Error connecting to MongoDB");
    }
}

module.exports = { connect };
