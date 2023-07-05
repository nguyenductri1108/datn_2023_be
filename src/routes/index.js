const bookRouter = require("./book");
const homeRouter = require("./home");
const uploadImg = require("./uploadImg");

function route(app) {
    app.use("/api", homeRouter);

    app.use("/api/books", bookRouter);

    app.use("/api/uploadImg", uploadImg);
}

module.exports = route;
