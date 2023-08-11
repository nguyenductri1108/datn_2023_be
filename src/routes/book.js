const express = require("express");
const router = express.Router();

const BookController = require("../app/controllers/BookController");
const needAuthenticated = require("../middlewares/needAuthenticated");
const checkAdmin = require("../middlewares/checkAdmin");

router.get("/", BookController.getCommonBooks);
router.post("/filter", BookController.getBookFiltered);
router.get("/getbooks", BookController.getBooks);
router.get("/:id", BookController.getBookById);
router.post("/", needAuthenticated, checkAdmin, BookController.createBook);
router.delete("/:id", needAuthenticated, checkAdmin, BookController.deleteBook);
router.put("/:id", needAuthenticated, checkAdmin, BookController.updateBook);

module.exports = router;
