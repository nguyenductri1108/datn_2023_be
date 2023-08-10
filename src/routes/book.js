const express = require("express");
const router = express.Router();

const BookController = require("../app/controllers/BookController");

router.get("/", BookController.getCommonBooks);

router.get("/getbooks", BookController.getBooks);

router.get("/:id", BookController.getBookById);

module.exports = router;
