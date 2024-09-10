

class BookService{

    constructor(bookRepository){
        this.bookRepository = bookRepository;
    }

    getBooks(){
        return this.bookRepository.getBooks();
    }

    getBookById(id){
        return this.bookRepository.getBookById(id);
    }

    addBook(book){
        return this.bookRepository.addBook(book);
    }

    updateBook(prevId,bookObj){
        return this.bookRepository.updateBook(prevId,bookObj);
    }

    deleteBookById(id){
        return this.bookRepository.deleteBookById(id);
    }

    getBookReviews(id){
        return this.bookRepository.getBookReviews(id);
    }

    addBookReview(book_id,review){
        return this.bookRepository.addBookReview(book_id,review);
    }

    getReviewByBook(book_id,review_id){
        return this.bookRepository.getReviewByBook(book_id,review_id);
    }

    updateBookReviewById(book_id,review_id,reviewObj){
        return this.bookRepository.updateBookReviewById(book_id,review_id,reviewObj);
    }

    deleteBookReviewById(book_id, review_id){
        return this.bookRepository.deleteBookReviewById(book_id, review_id);
    }


    getBooksByCategory(category){
        return this.bookRepository.getBooksByCategory(category);
    }

}


module.exports = BookService;