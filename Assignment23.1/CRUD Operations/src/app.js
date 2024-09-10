var express = require('express');
var {getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthorDetails,
    deleteAuthorById} = require('./authors');
var {getAllBooks,getBookByTitle, addNewBook,updateBookDetails,deleteBookByTitle}=require('./books.js')



function createApp() {

    console.log('configuring the app');
    var app = express();
    app.use(express.json());

    // CRUD on Author
    app.get('/authors', async function (request, response) {
        try {
            const authors = await getAllAuthors();
            response.send(authors);
        } catch (e) {
            response.status(500).send(e.message);
        }
    });
    
    app.get('/author/:id', async function (request, response) {
        const { id } = request.params;
        try {
            const author = await getAuthorById(id);
            response.send(author);
        } catch (e) {
            response.status(500).send(e.message);
        }
    });
    
    app.post('/author', async function (request, response) {
        const authorData = request.body;
        try {
            const id = await addNewAuthor(authorData);
            response.send(`Added author with ID ${id} successfully.`);
        } catch (e) {
            response.status(500).send(e.message);
        }
    });
    
    app.put('/author/:id', async function (request, response) {
        const { id } = request.params;
        const updateFields = request.body;
        try {
            const msg = await updateAuthorDetails(id, updateFields);
            response.send(msg);
        } catch (e) {
            response.status(500).send(e.message);
        }
    });
    
    app.delete('/author/:id', async function (request, response) {
        const { id } = request.params;
        try {
            const msg = await deleteAuthorById(id);
            response.send(msg);
        } catch (e) {
            response.status(500).send(e.message);
        }
    });
    


    //Crud on Books
    app.get('/books', async function (request, response) {
        var books = await getAllBooks();
        response.send(books);
    });

    app.get('/book/:title', async function (request,response) {
        var title=request.params.title;
        var book= await getBookByTitle(title);
        response.send(book);
    });

    app.post('/book', async function (request,response) {
        
        let bookData= request.body;
        try{
            
            var id= await addNewBook(bookData);            
            response.send(`added book with ${id} successfully`);
        }catch(e){
            response.send(e);
        }      

    });


    app.put('/book/:title', async function (request,response) { 
        var {title}=request.params;        
        let bookData= request.body;
        try{
            
            var msg= await updateBookDetails(title,bookData);            
            response.send(msg);
        }catch(e){
            response.send(e);
        }      

    });

    app.delete('/book/:title',async function (request,response){
        var {title} = request.params;

        try{
           var msg= await deleteBookByTitle(title);
            response.send(msg);
        }catch(e){
            response.send(e);
        }
        
    });


    return app;    
}


module.exports={createApp};