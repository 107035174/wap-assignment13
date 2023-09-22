const Book = require("../Model/book");

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.getBookById(req.param.bookId));
}

exports.save = (req, res, next) => {
    const book = req.body;
    const savedBook = new Book(null, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(200).json(savedBook);
}

exports.update = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(req.param.bookID, book.title, book.ISBN, book.publishedDate, book.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.param.bookId);
    res.status(200).end();
}