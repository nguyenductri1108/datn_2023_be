const Book = require("../models/Book");

class BookController {
  getBooks(req, res, next) {
    const { name, author, category, limit } = req.query;

    const query = {
      // $or: [],
    };

    if (name) {
      query.$or = [{ name: { $regex: new RegExp(name, "i") } }];
    }

    if (author) {
      query.$or = query.$or ?? [];
      query.$or.push({ author: { $regex: new RegExp(author, "i") } });
    }

    if (category) {
      query.$and = [{ type: category }];
    }

    console.log(query);

    Book.find(query)
      .limit(limit ? limit : 5)
      .then((books) => {
        res.send({
          success: 1,
          data: books,
        });
      })
      .catch(next);
  }

  getBookById(req, res, next) {
    Book.find({ _id: req.params.id })
      .then((book) => {
        res.json({ success: 1, data: book });
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
