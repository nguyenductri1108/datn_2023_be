const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        name: { type: String, maxLength: 300, required: true },
        author: { type: String, maxLength: 100, required: true },
        createAt: { type: Date, default: Date.now() },
        quantity: { type: Number, require: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        discount: { type: Number },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", Book);
