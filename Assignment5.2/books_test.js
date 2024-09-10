var {BooksList}= require('./books_list');

var list=new BooksList();


var sample_list=[
    {
        "title": "The Secret of Midnight Manor",
        "author": "Eleanor Sinclair",
        "price": 19.99,
        "rating": 4.5,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786860/kw3a45xnhq1xxzf2qmxs.jpg"
    },
    {
        "title": "Whispers in the Mist",
        "author": "Henry Mitchell",
        "price": 12.99,
        "rating": 3.8,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786962/download.jpg"
    },
    {
        "title": "Lost Treasures of Avalon",
        "author": "Isabella Greene",
        "price": 24.99,
        "rating": 4.2,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787035/images.jpg"
    },
    
    {
        "title": "Echoes Across Time",
        "author": "Sophia Reynolds",
        "price": 14.99,
        "rating": 4.7,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787091/download_1.jpg"
    },
    {
        "title": "Shadows of the Forgotten City",
        "author": "David Carter",
        "price": 9.99,
        "rating": 4.0,
        "cover": "https://res.cloudinary.com/dqdo29iis/image/upload/v1722787154/download_2.jpg"
    }
]
;

for(var book of sample_list){

    list.addBook(book);
}



console.log('books array = ',list.getBooks());

list.deleteBook("Shadows of the Forgotten City");

console.log('delete books array = ',list.getBooks());


var newBook={
    "title": "Echoes Across Tim",
    "author": "Sophia Reynolds",
    "price": 25,
    "rating": 3,
    "cover": "book5.jpg"
}
list.updateBook('The Secret of Midnight Manor', newBook);


console.log('find by title : ',list.findByTitle('Echoes Across Time'));
// console.log('find by author name : ',list.findByAuthor('Isabella Greene'));

// console.log('find by price range : ',list.findByPrice(16,23));


// console.log('list',list);

// console.log(`list : ${list}`); //invokes list.toString();

// console.log('books array = ',list.getBooks());