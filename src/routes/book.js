const express = require("express");
const router = express.Router();

const BookController = require("../app/controllers/BookController");

router.get("/getBooksByName/:name", BookController.index);

module.exports = router;
