const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart = new Schema(
    {
        idOwner: { type: String, required: true },
        dataCart: { type: Array, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
