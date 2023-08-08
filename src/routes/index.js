const bookRouter = require("./book");
const uploadImg = require("./uploadImg");
const authRouter = require("./auth");
const userRouter = require("./user");

function route(app) {
    app.use("/api/books", bookRouter);

    app.use("/api/uploadImg", uploadImg);

    app.use("/api/auth", authRouter);

    app.use("/api/user", userRouter);
}

module.exports = route;
