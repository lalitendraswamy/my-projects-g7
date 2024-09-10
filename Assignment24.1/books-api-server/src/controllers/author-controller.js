
let authorRepository= require('../repositories/mongodb/author-repository');
let AuthorService = require('../services/author-service');


var service = new AuthorService(authorRepository);





 async function getAuthors(req) {
    return await service.getAllAuthors();
}

async function getById(req) {
    return await service.getAuthorById(req.params.authorId);
}

async function addAuthor(req,res){
    return await service.addAuthor(req.body);
}


async function updateAuthor(req) {
    return await service.updateAuthor(req.params.authorId,req.body)
}

async function deleteAuthorById(req) {
    return await service.deleteAuthorById(req.params.authorId);
}


async function getAuthorBooks(req) {
    return await service.getAuthorBooks(req.params.authorId);
}


async function authorSearch(req) {
    const queryText = req.query.q || '';
    console.log(queryText);
    return await service.authorSearch(queryText);
}

module.exports = {
    getAuthors,
    getById,
    addAuthor,
    updateAuthor,
    deleteAuthorById,
    getAuthorBooks,
    authorSearch
};
