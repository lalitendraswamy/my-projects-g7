let http = require('http');
let { Router } = require('./router');
let { getAllBooks, joins, addNewBook, updateTitle, deleteBookByTitle } = require('../Mongodb-assaignment-20/src/books');

let port = 80;
let router = new Router();

router.use(async function (req, res) {
    req.name = "sritha";
})

router.useStatic('public');

router.get('/books', async function (req, res) {
    console.log(req.name);
    let result = await getAllBooks();
    router.sendResponse(res, 200, { result });
})

router.get('/authorDetails', async function (req, res) {
    let result = await joins();
    router.sendResponse(res, 200, { result });
})

router.post('/addNewBook', async function (req, res) {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const data = JSON.parse(body); 
            const { title, isbn, author, price, description, tags, cover, authorId, reviews } = data;

            // Calling the function to add a new book
            const result = await addNewBook(title, isbn, author, price, description, tags, cover, authorId, reviews);

            router.sendResponse(res, 201, result);
        } catch (error) {
            // Send an error response
            router.sendResponse(res, 500, { error: "Failed to add book" });
        }
    });
});

router.put('/updateBook', async function(req,res) { 
    let body = '';
    req.on('data',chunk=>{
        body += chunk.toString();
    }) 

    req.on('end', async ()=>{
        try{
            let bodyContent = JSON.parse(body);
        let {oldTitle,newTitle} = bodyContent;
        let result = await updateTitle(oldTitle,newTitle);
        router.sendResponse(res,200,{result});
        }catch(e){
            router.sendResponse(res,400,{error : "Failed to update the book"})
        }
    })
})

router.delete('/deleteBook', async function(req, res) { 
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            let bodyContent = JSON.parse(body);
            let { title } = bodyContent;
            let result = await deleteBookByTitle(title);
            router.sendResponse(res, 200, { result });
        } catch (e) {
            router.sendResponse(res, 400, { error: "Failed to delete the book" });
        }
    });

    req.on('error', (err) => {
        router.sendResponse(res, 500, { error: "Error processing request" });
    });
});




let server = http.createServer(async function (req, res) {
    router.runRouter(req, res);
})
server.on('error', (error) => {
    console.log("error connecting to the server");
})

server.listen(port, () => console.log("connected to port 80"));