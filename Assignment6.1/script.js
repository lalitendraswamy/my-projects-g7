var booksListEl = document.getElementById('books-list');
var titleEl = document.getElementById('title');
var authorEl = document.getElementById('author');
var ratingEl = document.getElementById('rating');
var priceEl = document.getElementById('price');
var coverEl = document.getElementById('cover');
var bookFormEl = document.getElementById('book-form');
var bookImgEl = document.getElementById('book-img');
bookImgEl.src= "https://res.cloudinary.com/dqdo29iis/image/upload/v1722795862/XAHAGSbEQ3m5-aKCV6UWHA.jpg";
var list = new BooksList();

var sample_list = [
    {
        "title": "The Secret of Midnight Manor",
        "author": "Eleanor Sinclair",
        "price": 1999,
        "rating": 4,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786860/kw3a45xnhq1xxzf2qmxs.jpg"
    },
    {
        "title": "Whispers in the Mist",
        "author": "Henry Mitchell",
        "price": 1299,
        "rating": 3,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786962/download.jpg"
    },
    {
        "title": "The Accursed God",
        "author": "Vivek Dutta Mishra",
        "price": 299,
        "rating": 5,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722795117/6e721757fb584d73ffafef7ca54331c61c59c1be__400x0.jpg"
    },
    {
        "title": "Lost Treasures of Avalon",
        "author": "Isabella Greene",
        "price": 499,
        "rating": 4,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787035/images.jpg"
    },
    {
        "title": "Echoes Across Time",
        "author": "Sophia Reynolds",
        "price": 149,
        "rating": 4,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787091/download_1.jpg"
    },
    {
        "title": "Shadows of the Forgotten City",
        "author": "David Carter",
        "price": 999,
        "rating": 4,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787154/download_2.jpg"
    }
];

for (let book of sample_list) {
    list.addBook(book);
}

function renderBooks() {
    booksListEl.innerHTML = '';
    var books_list = list.getBooks();
    console.log(books_list);
    for (let book of books_list) {
        // Properly escape and quote the title
        let encodedTitle = encodeURIComponent(book.title);
        booksListEl.innerHTML += `<li onclick="onBookSelect('${encodedTitle}')">${book.title}</li>`;
    }
}

function makeFormEmpty(){
    titleEl.value = '';
        authorEl.value = '';
        priceEl.value = '';
        ratingEl.value = '';
        coverEl.value = '';
        bookImgEl.src= "https://res.cloudinary.com/dqdo29iis/image/upload/v1722795862/XAHAGSbEQ3m5-aKCV6UWHA.jpg";
}

renderBooks();

function addBookUI() {
    var title = titleEl.value;
    var author = authorEl.value;
    var rating = parseFloat(ratingEl.value); // Convert to number
    var price = parseFloat(priceEl.value);   // Convert to number
    var cover = coverEl.value;
    var book = { title, author, price, rating, cover };
    list.addBook(book);
    makeFormEmpty();
    renderBooks();
}


var tempTitle='';
function onBookSelect(encodedTitle) {
    var title = decodeURIComponent(encodedTitle); // Decode title
    var book = list.findByTitle(title);
    bookImgEl.src= book.cover;
    tempTitle=title;
    if (book) {
        titleEl.value = book.title;
        authorEl.value = book.author;
        priceEl.value = book.price;
        ratingEl.value = book.rating;
        coverEl.value = book.cover;
       
    } else {
        console.error("Book not found");
    }
}


function saveBookUI() {
    console.log(tempTitle)
    var title = titleEl.value;
    var author = authorEl.value;
    var rating = parseFloat(ratingEl.value); // Convert to number
    var price = parseFloat(priceEl.value);   // Convert to number
    var cover = coverEl.value;
    var book = { title, author, price, rating, cover };
    list.updateBook(tempTitle,book);
    makeFormEmpty();
    renderBooks();
}


function deleteBookUI() {

    if(tempTitle===''){
        renderBooks()
        return;
    }
    
    list.deleteBook(tempTitle);
    makeFormEmpty();
    renderBooks();
}