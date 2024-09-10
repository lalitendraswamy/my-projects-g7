var { Book, BookManager } = require("./books");




var manager=new BookManager();
manager.addBook(
    new Book("The Accursed God", "Vivek Dutta Mishra", 299, 4.5, "conver1.jpg"),
    new Book("Manas", "Vivek Dutta Mishra", 199, 4.4, "cover2.jpg"),
    new Book("Rashmirathi", "Ramdhari Singh Dinkar", 99, 4.1, "conver1.jpg"),
    new Book("Kane and Abel", "Jeffrey Archer", 599, 4.6, "conver2.jpg")
  );

console.log('list',manager.getAllBooks()); //object as JSON


// For each
console.log("All books:");
manager.getAllBooks().forEach(book => console.log(book.toString()));

// Map 
let titles = manager._books.map(book => book.title);
console.log("\n Book titles:");
titles.forEach(title => console.log(title));

// Reduce 
let totalPrice = manager._books.reduce((acc, book) => acc + book.price, 0);
console.log("\n Total price of all books: $" + totalPrice.toFixed(2));


let highestRating = manager._books.reduce((max, book) => book.rating > max ? book.rating : max, 0);
console.log("\n Highest rating: " + highestRating);


// Filter 
let affordableBooks = manager._books.filter(book => book.price > 12);
console.log("\n Affordable books:");
affordableBooks.forEach(book => console.log(book.toString()));

let affordableBooks = manager._books.filter(book => book.rating > 3);
console.log("\n Affordable books:");
affordableBooks.forEach(book => console.log(book.toString())); 














// console.log(`list : ${list}`); //invokes list.toString();

// var testNumbers=[2,3,9,2,6];

// for(var number of testNumbers)
//     list.append(number);


// console.log('list',list);

// console.log(`list : ${list}`); //invokes list.toString();

// console.log('list.toString()',list.toString());

// console.log('list.length()',list.length());


// for(var i=0; i<list.length(); i++)
//     console.log(`list.get(${i})`,list.get(i));

// //console.log(list.get(100));

// for(var i=0;i<list.length();i++){
//     list.set(i, list.get(i)*10);
// }

// console.log('list.toString()',list.toString());

// // list.remove(4); //last item 60
// // list.remove(2); //90
// // list.remove(0); //20

// console.log('list.toString()',list.toString());

// list.insert(0,100);

// list.insert(2,50);
// list.insert(2,80);
// list.insert(2,90);

// console.log('list.toString()',list.toString());


// console.log('list.get(-1)',list.get(-1));



// var list2= new LinkedList(4,2,9,1,1);
// list2.append(2,3,9,6,2)

// console.log(`Lis is ${list2}`);
