

const { connect, disconnect } = require('./connection');

const url = 'mongodb://localhost/';
const dbName = 'g7cr_202408';
const collectionName = 'books';

// Function to connect to the database and get the books collection
async function getBooksCollection() {
    const connection = await connect(url);
    const db = connection.db(dbName);
    return db.collection(collectionName);
}

// Function to get all books
async function getAllBooks() {
    const booksCollection = await getBooksCollection();
    const books = await booksCollection.find({}).toArray();
    return books;
}

// Function to get books by author (case-sensitive)
async function getAllBooksByAuthor(author) {
    const booksCollection = await getBooksCollection();
    const book = await booksCollection.findOne({ author });
    return book;
}

// Function to get books by author (case-insensitive)
async function getAllBooksByAuthorCaseInsensitive(author) {
    const booksCollection = await getBooksCollection();
    const book = await booksCollection.findOne({ author: new RegExp(author, 'i') });
    return book;
}

// Function to add a new book
async function addNewBook(newBook) {
    
    const booksCollection = await getBooksCollection();
    const result = await booksCollection.insertOne(newBook);
    return result.insertedId;
}

// Function to delete a book by title
async function deleteBookByTitle(title) {
    const booksCollection = await getBooksCollection();
    await booksCollection.deleteOne({ title });
    let getBook = await booksCollection.findOne({title}).length;
    if(getBook==0){
        return `Book with title "${title}" deleted`;
    }else{
        return `No book found with title ${title}`;
    }
}

async function groupBy(){
    const booksColection = await getBooksCollection();
    return await booksColection.aggregate([
        {$group : {
            _id : "$authorId",
            title : {$first : '$title'},
            books : {$sum: 1}

                }
            }
    ]).toArray()
}



async function joins() {
  const connection = await connect(url);
  const db = connection.db(dbName);
  const authors = db.collection('authors');  // Corrected collection name to 'authors'
  return await authors.aggregate([
    {
      $lookup: {
        from: 'books',
        localField: 'id',  // Assuming the author id in authors collection is 'id'
        foreignField: 'authorId',
        as: 'bookDetails'
      }
    },
    {
      $project: {
        _id: 0,
        name: 1,
        photo: 1,
        BooksWritten: { $size: "$bookDetails" },
        total_reviews : {$sum : {
          $map : {
            input : "$bookDetails",
            as : "bookReviews",
            in :{$size : "$$bookReviews.reviews"}
          }
        }},
        average_price: { $avg: "$bookDetails.price" },
        total_rating: { $avg: "$bookDetails.rating" }
      }
    }
  ]).toArray();  // Convert the cursor to an array to get the result
}



async function authorDetails() {
  let booksCollection = await getBooksCollection();
  return await booksCollection.aggregate([
      {
          $group: {
              _id: "$authorId",
              total_books: { $sum: 1 },
              avg_price: { $avg: "$price" },
              author: { $first: "$authorId" },
              avg_rating: {
                  $avg: {
                      $avg: {
                          $map: {
                              input: { $ifNull: ["$reviews", []] },
                              as: "review",
                              in: { $ifNull: ["$$review.rating", 0] } 
                          }
                      }
                  }
              }
          }
      },
      {
          $project: {
              _id: 0,
              author: 1,
              avg_price: 1,
              total_books: 1,
              avg_rating: 1
          }
      }
  ]).toArray();
}





// Function to update a book's title
async function updateTitle(oldTitle, newTitle) {
    const booksCollection = await getBooksCollection();
    const result = await booksCollection.updateOne(
        { title: oldTitle },
        { $set: { title: newTitle } }
    );
    if (result.matchedCount > 0) {
        return "Successfully updated the title.";
    } else {
        return "No book found with the given title.";
    }
}

//Function to update Book
async function updateBookDetails(prevTitle, updateBookObj) {
    
        const booksCollection = await getBooksCollection(); 
        const result = await booksCollection.updateOne(
            { title :prevTitle} ,               
            { $set: updateBookObj }    
        );

        if (result.matchedCount > 0) {
            return "Successfully updated the book details.";
        } else {
            return `No book found with the given title ${prevTitle}.`;
        }
    
}


// Function to get a book by title
async function getBookByTitle(title) {
    const booksCollection = await getBooksCollection();
    const book = await booksCollection.findOne({ title });
    if(book){
        return book;
    }else{
        return `No book found with the given title ${title}.`
    }
    
}

module.exports = {
    getAllBooks,
    getAllBooksByAuthor,
    getAllBooksByAuthorCaseInsensitive,
    addNewBook,
    deleteBookByTitle,
    updateTitle,
    updateBookDetails,
    getBookByTitle,
    groupBy,
    joins,
    authorDetails
};