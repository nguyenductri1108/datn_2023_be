const express = require("express");
const router = express.Router();

const BookController = require("../app/controllers/BookController");

router.get("/", BookController.getCommonBooks);

router.get("/getBooksByName/:name", BookController.getBookByName);

module.exports = router;
