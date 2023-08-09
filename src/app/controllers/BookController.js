const Book = require("../models/Book");

class BookController {
    getBookByName(req, res, next) {
        Book.find({ name: req.params.name })
            .then((books) => {
                res.json({ books: books });
            })
            .catch(next);
    }

    getAllBooks(req, res, next) {
        Book.find({})
            .then((books) => {
                res.json({ books: books });
            })
            .catch(next);
    }
}

module.exports = new BookController();
