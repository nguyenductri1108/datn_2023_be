const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, maxLength: 300, required: true },
        password: {
            type: String,
            required: true,
        },
        dateOfBirth: { type: Date, default: new Date() },
        address: { type: String, maxLength: 400 },
        cart: { type: String, maxLength: 400 },
        orderHistory: { type: Array, default: [] },
        isBlocked: { type: Boolean, default: false },
        address: { type: Object },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", User);
