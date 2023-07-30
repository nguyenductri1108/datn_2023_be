const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
    {
        idOwner: { type: String, required: true },
        status: { type: String, required: true },
        paidType: {
            type: String,
            required: true,
        },
        address: { type: Object, required: true },
        data: { type: Array, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", Order);
