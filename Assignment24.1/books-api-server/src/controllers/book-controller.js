
let bookRepository= require('../repositories/mongodb/book-repository');
let bookService = require('../services/book-service');


var service = new bookService(bookRepository);





 async function getBooks(req) {
    return await service.getBooks();
}

async function getBookById(req) {
    return await service.getBookById(req.params.bookId);
}

async function addBook(req,res){
    return await service.addBook(req.body);
}


async function updateBook(req) {
    return await service.updateBook(req.params.bookId,req.body)
}

async function deleteBookById(req) {
    return await service.deleteBookById(req.params.bookId);
}


async function getbookBooks(req) {
    return await service.getbookBooks(req.params.bookId);
}

async function getBookReviews(req) {
    return await service.getBookReviews(req.params.bookId);
}

async function addBookReview(req){
    return await service.addBookReview(req.params.bookId,req.body)
}

async function getReviewByBook(req) {
    return await service.getReviewByBook(req.params.bookId,req.params.reviewId);
}


async function updateBookReviewById(req) {
    return await service.updateBookReviewById(req.params.bookId,req.params.reviewId,req.body);
}


async function deleteBookReviewById(req){
    return await service.deleteBookReviewById(req.params.bookId,req.params.reviewId);


}

async function getBooksByCategory(req) {
    return await service.getBooksByCategory(req.params.cat);
}


module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBookById,
    getBookReviews,
    getbookBooks,
    addBookReview,
    getReviewByBook,
    updateBookReviewById,
    deleteBookReviewById,
    getBooksByCategory
    
};
