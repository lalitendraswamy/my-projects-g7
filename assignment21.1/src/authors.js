
//authors.js
var {connect,disconnect} =require('./connection');



var url='mongodb://localhost/';

async function getAllAuthors(){
    var connection= await connect(url);

    var db= connection.db('g7cr_202408');

    var authors= db.collection('authors');

    var authors= await authors.find({},{projection:{biography:0,_id:0}}).toArray();

    return authors;

}

async function getAuthorById(id){

    var connection= await connect(url);
    var db= connection.db('g7cr_202408');
    var authors= db.collection('authors');
    var author=await authors.findOne({id});
    return author;

}


async function insertAuthor({ name, id, photo, biography, tags = [] }) {
  var connection = await connect(url);
  var db = connection.db('g7cr_202408');
  var authors = db.collection('authors');

 
  var author = {
      name,
      id,
      photo,
      biography,
      tags
  };

  const result = await authors.insertOne(author);

 
  return result;
}

async function insertAuthors(authorsArray) {
  var connection = await connect(url);
  var db = connection.db('g7cr_202408');
  var authors = db.collection('authors');


  const authorsData = authorsArray.map(({ name, id, photo, biography, tags = [] }) => ({
      name,
      id,
      photo,
      biography,
      tags
  }));

  const result = await authors.insertMany(authorsData);

 
  return result;
}




module.exports={
    getAllAuthors,
    getAuthorById,
    insertAuthor,
    insertAuthors
   

}