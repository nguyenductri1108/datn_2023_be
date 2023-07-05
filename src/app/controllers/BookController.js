const Book = require("../models/Book");

class BookController {
    index(req, res, next) {
        Book.find({ name: req.params.name })
            .then((books) => {
                res.json({ books: books });
            })
            .catch(next);
    }
}

module.exports = new BookController();
