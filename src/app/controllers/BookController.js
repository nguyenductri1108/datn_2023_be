const Book = require("../models/Book");

class BookController {
  getBookByName(req, res, next) {
    Book.find({ name: req.params.name })
      .then((books) => {
        res.json({ books: books });
      })
      .catch(next);
  }

  getCommonBooks(req, res, next) {
    Book.find({})
      .sort({ commonPoint: -1 })
      .limit(5)
      .then((books) => {
        res.json({ success: 1, books: books });
      })
      .catch(next);
  }

  createBook(req, res, next) {
    const {
      name,
      author,
      inStock,
      type,
      price,
      discount,
      description,
      commonPoint,
      imageSrc,
    } = req.body;
    Book.create({
      name,
      author,
      inStock,
      type,
      price,
      discount,
      description,
      commonPoint,
      imageSrc,
    })
      .then((book) => {
        res.json({ success: 1, book: book });
      })
      .catch(next);
  }

  updateBook(req, res, next) {
    const { id } = req.params;
    const updatedData = req.body;
    Book.findByIdAndUpdate(id, updatedData)
      .then(() => {
        res.json({ success: 1 });
      })
      .catch(next);
  }

  deleteBook(req, res, next) {
    const { id } = req.params;
    Book.findByIdAndDelete(id)
      .then(() => {
        res.json({ success: 1 });
      })
      .catch(next);
  }
}

module.exports = new BookController();
