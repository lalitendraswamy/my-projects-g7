let express = require("express");
let bookController = require("../controllers/book-controller");
let handleRequest = require("../utils/handler");

var books = express.Router();

books.route("/")
  .get(handleRequest(bookController.getBooks))
  .post(
    handleRequest((request, response) => {
      bookController.addBook(request, response);
    })
  );

books.route("/:bookId")
  .get(handleRequest(bookController.getBookById))
  .put(
    handleRequest((request, response) => {
      bookController.updateBook(request, response);
    })
  )
  .delete(handleRequest(bookController.deleteBookById));


books.route("/:bookId/reviews") 
  .get(handleRequest(bookController.getBookReviews))
  .post(handleRequest((request,response)=>{
    bookController.addBookReview(request,response);
  }))


books.route("/:bookId/reviews/:reviewId")
  .get(handleRequest(bookController.getReviewByBook))
  .put(handleRequest((request,response)=>{
    bookController.updateBookReviewById(request,response)
  }))
  .delete(handleRequest(bookController.deleteBookById))

books.route("/category/:cat")
  .get(handleRequest(bookController.getBooksByCategory))

module.exports = books;
