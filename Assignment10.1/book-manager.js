const { LinkedList } = require('./list'); // Importing the LinkedList class

class Book {
    constructor(title, author, price, rating, cover) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.cover = cover;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Rating: ${this.rating}, Cover: ${this.cover} \n`;
    }
}

class BookManager {
    constructor() {
        this._lastId = 0;
        this._books = new LinkedList(
            new Book('The Accursed God', 'Vivek Dutta Mishra', 299, 4.6, 'https://m.media-amazon.com/images/I/41xektjU1NL._SY445_SX342_.jpg'),
            new Book('Manas', 'Vivek Dutta Mishra', 399, 4.9, 'https://m.media-amazon.com/images/I/71MvJTjRjPL._AC_UY545_FMwebp_QL65_.jpg'),
            new Book('Mahabharata', 'C Rajkopalachari', 349, 4.8, 'https://m.media-amazon.com/images/I/81rq4w91g0L._AC_UY545_FMwebp_QL65_.jpg'),
            new Book('The Alchemist', 'Paulo Coelho', 249, 4.5, 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UY545_FMwebp_QL65_.jpg'),
            new Book('The Great Gatsby', 'F. Scott Fitzgerald', 399, 4.7, 'https://m.media-amazon.com/images/I/71qovngeOcL._AC_UY545_FMwebp_QL65_.jpg'),
            new Book('The Catcher in the Rye', 'J.D. Salinger', 299, 4.3, 'https://m.media-amazon.com/images/I/618XWn5fD5L._AC_UY545_FMwebp_QL65_.jpg'),
            new Book('To Kill a Mockingbird', 'Harper Lee', 299, 4.5, 'https://m.media-amazon.com/images/I/916YjOp3uyL._AC_UY545_FMwebp_QL65_.jpg')
        );

        this._books.forEach(b => {
            b._id = ++this._lastId;
        });
    }

    addBook(book) {
        book._id = ++this._lastId;
        console.log('book', book);
        this._books.append(book);
    }

    

    getBooks() {
        return this._books;
    }

    getBookById(id) {
        return this._books.find(b => b._id == id);
    }

    search(searchType, searchValue, min , max) {
        console.log('searchType', searchType);
        console.log('searchValue', searchValue);
        
        if (searchType === "author" || searchType === "_id" ) {
            let r = this._books.filter(b => b[searchType].toLowerCase().includes(`${searchValue}`.toLowerCase()));
            console.log(r);
        } else {
            let r = this._books.filter(b => b[searchType] >= min && b[searchType] <= max); 
            console.log(r);
        }
    }

    getBooksByAuthor(author) {
        return this._books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
    }

    getBooksByRatingRange(min, max) {
        return this._books.filter(b => b.rating >= min && b.rating <= max);
    }

    getBooksByTitle(title) {
        return this._books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    }

    getBooksByPriceRange(min, max) {
        return this._books.filter(b => b.price >= min && b.price <= max);
    }


    



    removeBook(id) {
        this._books = this._books.filter(b => b._id !== id);
    }

    updateBook(book) {
        console.log('update book', book);
        this._books = this._books.map(b => b._id == book._id ? book : b);
        console.log('this._books', this._books);
    }

    each(action) {
        this._books.forEach(action);
    }

    

    getAveragePriceOfBooks() {        
        const avg= this._books.average((sum, book) => sum + book.price,0);
        return avg;
    }
    

    getAverageRatingOfBooks() {
        const avg= this._books.average((sum, book) => sum + book.rating,0);
         return avg;
    }

    
    getSortedByPrice() {
        var sortedll= this._books.sortedList((book1, book2) => book1.price < book2.price);
        return sortedll.toString();
    }

    
    getSortedByRating() {
        var sortedll= this._books.sortedList((book1, book2) => book1.rating < book2.rating);
        return sortedll.toString();
    }

    getSortedByTitle() {
        var sortedll= this._books.sortedList((book1, book2) => book1.title < book2.title,false);
        return sortedll.toString();
    }



    

    getSortedByAuthor() {
        var sortedll= this._books.sortedList((book1, book2) =>{
            if(book1.author===book2.author){
                return book1.rating>book2.rating
            }
            return book1.author < book2.author

        }  );

        return sortedll.toString();
    }
    

}

// Exporting for Node.js environment
try {
    module.exports.BookManager = BookManager;
} catch (err) {
    // Handle the case where this code is not running in a Node.js environment
}
