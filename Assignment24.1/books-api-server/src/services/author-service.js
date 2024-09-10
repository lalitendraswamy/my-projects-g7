

class AuthorService{

    constructor(authorRepository){
        this.authorRepository = authorRepository;
    }

    getAllAuthors(){
        return this.authorRepository.getAllAuthors();
    }

    getAuthorById(id){
        return this.authorRepository.getAuthorById(id);
    }

    addAuthor(author){
        return this.authorRepository.addAuthor(author);
    }

    updateAuthor(prevId,authorObj){
        return this.authorRepository.updateAuthor(prevId,authorObj);
    }

    deleteAuthorById(id){
        return this.authorRepository.deleteAuthorById(id);
    }

    getAuthorBooks(id){
        return this.authorRepository.getAuthorBooks(id);
    }

    authorSearch(query){
        return this.authorRepository.getAuthorBooks(query);
    }

}


module.exports = AuthorService;