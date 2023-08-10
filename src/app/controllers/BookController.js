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
}

module.exports = new BookController();
