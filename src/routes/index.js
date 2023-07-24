const bookRouter = require("./book");
const uploadImg = require("./uploadImg");
const authRouter = require("./auth");

function route(app) {
    app.use("/api/books", bookRouter);

    app.use("/api/uploadImg", uploadImg);

    app.use("/api/auth", authRouter);
}

module.exports = route;
