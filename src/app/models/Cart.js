const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart = new Schema(
    {
        idOwner: { type: ObjectId, ref: "User", required: true },
        dataCart: [
            { itemId: { type: ObjectId, ref: "Book", required: true }, quantity: { type: Number, required: true } },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
