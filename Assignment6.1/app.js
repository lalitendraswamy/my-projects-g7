// var { Book, BookManager } = require("./books");

var app = (function () {


  var manager = new BookManager();

  var booksListEl = document.getElementById("books-list");
  var titleEl = document.getElementById("title");
  var authorEl = document.getElementById("author");
  var ratingEl = document.getElementById("rating");
  var priceEl = document.getElementById("price");
  var coverEl = document.getElementById("cover");
  var bookFormEl = document.getElementById("book-form");
  var bookImgEl = document.getElementById("book-img");
  var searchEl = document.getElementById("search");
  var searchListEl = document.getElementById("search-list");
  bookImgEl.src ="https://res.cloudinary.com/dqdo29iis/image/upload/v1722795862/XAHAGSbEQ3m5-aKCV6UWHA.jpg";


  

function initialize(){
        
        manager.addBook(
            new Book("The Accursed God", "Vivek Dutta Mishra", 299, 4.5, "https://res.cloudinary.com/dqdo29iis/image/upload/v1722795117/6e721757fb584d73ffafef7ca54331c61c59c1be__400x0.jpg"),
            new Book("Manas", "Vivek Dutta Mishra", 199, 4.4, "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787035/images.jpg"),
            new Book("Rashmirathi", "Ramdhari Singh Dinkar", 99, 4.1, "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786962/download.jpg"),
            new Book("Kane and Abel", "Jeffrey Archer", 599, 4.6, "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786860/kw3a45xnhq1xxzf2qmxs.jpg")
          );

          

          renderBooks();
                

    }
   

  function renderBooks() {
      booksListEl.innerHTML = "";
      
      for (var i = 0; i < manager._books.length(); i++) {
            var book = manager._books.get(i);
            
            booksListEl.innerHTML += `<li onclick="app.onBookSelect(${book.id})">${book.title}</li>`;
      }
  }


  function makeFormEmpty() {
    titleEl.value = "";
    authorEl.value = "";
    priceEl.value = "";
    ratingEl.value = "";
    coverEl.value = "";
    bookImgEl.src =
      "https://res.cloudinary.com/dqdo29iis/image/upload/v1722795862/XAHAGSbEQ3m5-aKCV6UWHA.jpg";
  }

 
  function addBookUI() {
    var title = titleEl.value;
    var author = authorEl.value;
    var rating = parseFloat(ratingEl.value); // Convert to number
    var price = parseFloat(priceEl.value); // Convert to number
    var cover = coverEl.value;
    manager.addBook(new Book(title, author, price, rating, cover));
    makeFormEmpty();
    renderBooks();
    
  }

  var tempId = "";
  function onBookSelect(id) {
    
    var book = manager._books.get(id-1);
    bookImgEl.src = book.coverUrl;
    tempId = book.id-1;
    if (book) {
      titleEl.value = book.title;
      authorEl.value = book.author;
      priceEl.value = book.price;
      ratingEl.value = book.rating;
      coverEl.value = book.coverUrl;
    } else {
      console.error("Book not found");
    }
  }
  
  function deleteBookUI() {
    
    var book = manager._books.get(tempId);

    manager.removeBook(book);
    makeFormEmpty();
    renderBooks();
  }

  function saveBookUI() {
    console.log(tempTitle);
    var title = titleEl.value;
    var author = authorEl.value;
    var rating = parseFloat(ratingEl.value); // Convert to number
    var price = parseFloat(priceEl.value); // Convert to number
    var cover = coverEl.value;
    var book = { title, author, price, rating, cover };
    manager.updateBook(tempTitle, book);
    makeFormEmpty();
    renderBooks();
  }


  function handleKeyDown(event) {

    var appendSearchItem=(title)=>{
        searchListEl.innerHTML+=`<li>${title}<li/>`
    }

    if (event.key ==='Enter') {
        var searched_title=searchEl.value;
        let searchedBooks = manager._books.filter(book => book.title.toLowerCase().includes(searched_title.toLowerCase())) 
        searchedBooks.forEach(book => appendSearchItem(book.title));
        console.log(searchListEl.innerHTML)
        if(searchListEl.innerHTML){
          bookImgEl.style.display="none";



























































          
        }
        
        
        
    }
}


  return{
    initialize,
    addBookUI,
    deleteBookUI,
    onBookSelect,
    handleKeyDown
  }


})();
