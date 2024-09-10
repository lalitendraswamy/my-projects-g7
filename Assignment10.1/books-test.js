const { BookManager } = require('./book-manager');
const manager = new BookManager();



function testAveragePrice() {    
    
    const averagePrice = manager.getAveragePriceOfBooks();
    console.log('Average Price:', averagePrice);
        
}

function testAverageRating() {   
    
    const averageRating = manager.getAverageRatingOfBooks();
    console.log('Average Rating:', averageRating);
        
}

function runTests() {
    // console.log("Testing Average Price of Books:");
    // testAveragePrice();
    // console.log("Testing Average Rating of Books:");
    // testAverageRating();


    console.log(manager.toString())
    console.log('sorted by title',manager.getSortedByAuthor())
   
}

runTests();
