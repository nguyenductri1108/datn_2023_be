const express = require("express");
const router = express.Router();

const BookController = require("../app/controllers/BookController");
const needAuthenticated = require("../middlewares/needAuthenticated");
const checkAdmin = require("../middlewares/checkAdmin");

router.get("/", BookController.getCommonBooks);
router.get("/getBooksByName/:name", BookController.getBookByName);
router.post("/", needAuthenticated, checkAdmin, BookController.createBook);
router.delete("/:id", needAuthenticated, checkAdmin, BookController.deleteBook);
router.put("/:id", needAuthenticated, checkAdmin, BookController.updateBook);

module.exports = router;
