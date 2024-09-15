class Book{
    constructor(title,author,price,rating,isRead=true){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
        this.isRead=isRead;
    }

    displayBook(){
        return `Title: ${this.title}, Author: ${this.author}, Price ${this.price}, Rating: ${this.rating}, Read: ${this.isRead}`;
    }

}

class Library{
    constructor() {
        this.bookList=[];
    }

    addBook(bookDetails){
        //let  [title,author,price,rating,isRead]=bookDetails.split(' ')
        let book =new Book(...bookDetails.split(' '));
        this.bookList.push(book)
    }

    deleteBook(title){
        this.bookList= this.bookList.filter(obj=>obj.title!==title)
    }

    getBook(title){
        let book= this.bookList.find(obj=>obj.title===title);
        return book.displayBook()
        
    }

    getAllBooks(){
        return this.bookList
    }

}

let input='HarryPotter JK 599 4.5 true'

let lib=new Library();

lib.addBook(input);
lib.addBook('Atomic Surendra 599 4.5 true');

console.log(lib.deleteBook('Atomic'));
console.log(lib.getAllBooks('Atomic'));
