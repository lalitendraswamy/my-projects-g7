const CLI = require('./cli');
const { getAllBooks, getBookById,insertBook } = require('./books');
const { disconnect } = require('./connection');



const app = new CLI("Books CLI", { close: disconnect });





app.addCommand(getAllBooks, "books", "Get a list of all books", "list-books", "all-books");
app.addCommand(getBookById, "book", "Get a book by ID", "get-book", "book-info");
app.addCommand(insertBook, "insert-book", "Insert a single book", "add-book");



app.run();
