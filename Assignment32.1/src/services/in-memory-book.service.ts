import { delay } from "../utils/delay";
import { Book } from "./book";

export class InMemoryBookService {
    private books: Book[];

    constructor() {
        this.books = []; // book list
    }

    getAllBooks = async () => {
        console.log('returning all books...');
        await delay(3000);
        return this.books;
    }

    getBookById = async (id?: string) => {
        await delay(2000);
        return this.books.find((book) => book.id === id);
    }

    addBook = async (book: Book) => {
        await delay(2000);
        if (!book.id) {
            book.id = book.title.toLowerCase().split(' ').join('-');
        }
        this.books.push(book);
    }

    removeBook = async (id: string) => {
        await delay(2000);
        this.books = this.books.filter(b => b.id !== id);
    }

    updateBook = async (id: string, updatedBook: Book) => {
        await delay(2000);
        this.books = this.books.map(b => b.id === id ? updatedBook : b);
    }
}
