let express = require('express');
let authorController = require('../controllers/author-controller');
let handleRequest=require('../utils/handler')


var authors = express.Router();

authors.route("/")
    .get(handleRequest(authorController.getAuthors))
    .post(handleRequest((request, response) => {
        authorController.addAuthor(request,response);
    })); 


authors.route("/:authorId")
    .get(handleRequest(authorController.getById) )
    .put(handleRequest((request, response) => {
        authorController.updateAuthor(request,response);
    }))
     
    .delete( handleRequest(authorController.deleteAuthorById));

authors.route("/:authorId/books")
    .get(handleRequest(authorController.getAuthorBooks))

authors.route("/search")
    .get( handleRequest(authorController.authorSearch));
    




module.exports = authors;



