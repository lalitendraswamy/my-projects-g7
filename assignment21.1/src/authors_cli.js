

var CLI = require('./cli');
var {getAllAuthors,getAuthorById,insertAuthor,insertAuthors} = require('./authors');
var {disconnect} = require('./connection');
    


var app = new CLI("Author's CLI",{close:disconnect});



app.addCommand(getAllAuthors, "authors","Get a list of all authors", "get-authors","authors-list");

app.addCommand(getAuthorById, "author","Get an author by ID", "get-author","author-info");

app.addCommand(insertAuthor,"insert-author","inserting Author Data","add-author")





app.run();