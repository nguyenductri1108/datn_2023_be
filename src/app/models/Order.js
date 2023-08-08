const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
    {
        idOwner: { type: ObjectId, ref: "User", required: true },
        status: { type: String, required: true },
        paidType: {
            type: String,
            required: true,
        },
        address: {
            street: { type: String, maxlength: 200 },
            ward: { type: String, maxlength: 200 },
            district: { type: String, maxlength: 200 },
            province: { type: String, maxlength: 200 },
            detailAddress: { type: String, required: true },
        },
        data: { type: Array, required: true, default: [] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", Order);
