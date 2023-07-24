const cors = require("cors");
require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 1108;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const db = require("./config/db");
db.connect();

// app.use((req, res, next) => {
//     console.log(req.body);
//     next();
// });

app.use(morgan("combined"));
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("*", (req, res) => {
    res.send("404 Not Found");
});
