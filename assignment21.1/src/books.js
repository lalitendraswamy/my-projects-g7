    const { connect, disconnect } = require('./connection');

    const url = 'mongodb://localhost/27017'; 


    async function getAllBooks() {
        const connection = await connect(url);
        const db = connection.db('g7cr_202408');
        const books = db.collection('books');

    
        const booksList = await books.find({}, { projection: { _id: 0, description: 0 } }).toArray();
        
        
        return booksList;
    }


    async function getBookById(id) {
        const connection = await connect(url);
        const db = connection.db('g7cr_202408');
        const books = db.collection('books');

        const book = await books.findOne({ id});
    
        return book;
    }

    async function insertBook(title, isbn, author, price,cover, description, authorId, tags = '', reviews = '' ) {
        const connection = await connect(url);
        const db = connection.db('g7cr_202408');
        const books = db.collection('books');

    
        const book = {
            title,
            isbn,
            author,
            price: parseFloat(price),
            cover,
            description,
            
            authorId,
            tags: tags.split(','),
            reviews: reviews.split(',')
        };

        const result = await books.insertOne(book);

    
        return result;
    }

  




    module.exports = {
        getAllBooks,
        getBookById,
        insertBook,
        
    };
