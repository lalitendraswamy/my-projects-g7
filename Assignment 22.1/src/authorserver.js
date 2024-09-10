

const http = require('http');
const { MongoClient } = require('mongodb');
const url = require('url');



let db;
async function connectToDatabase() {
    try {
        const client = await MongoClient.connect("mongodb://localhost:27017/", {
        });
        db = client.db("g7cr_202408");
        console.log("Database connected");
    } catch (err) {
        console.error("Failed to connect to database:", err);
    }
}
connectToDatabase();


const server = http.createServer(async (req, res) => {
    
    if (req.method === "GET") {
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;
        const query = parsedUrl.query;

        if (pathname === "/getauthors") {
            try {
                const collection = db.collection("authors");

                if (query.id) {
                    const id = query.id;
                    const author = await collection.findOne({ id: id });

                    if (author) {
                       
                        res.end(JSON.stringify(author));
                    } else {
                       
                        res.end("No author found");
                    }
                } else {
                    const authors = await collection.find().toArray();
                  
                    res.end(JSON.stringify(authors));
                }
            } catch (err) {
                res.end("Internal server error");
            }
        }


        
    } 
    
    else if (req.method === "POST") {
        if (req.url === "/addauthor") {
            
            let body = '';


            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', async () => {
                try {
                    const newAuthor = JSON.parse(body);
                    const collection = db.collection("authors");
                    const result = await collection.insertOne(newAuthor);
                    res.end(JSON.stringify({ message: 'Author added', result }));
                } catch (err) {
                    res.end("Invalid data");
                }
            });
        }
       
    }

});


server.listen(1100, () => {
    console.log("Server up and running on port 1100");
});
