const { connect, disconnect } = require('./connection');

const url = 'mongodb://localhost/';
const dbName = 'g7cr_202408';
const collectionName = 'authors';


async function getAuthorsCollection() {
    const connection = await connect(url);
    const db = connection.db(dbName);
    return db.collection(collectionName);
}


async function getAllAuthors() {
    const authorsCollection = await getAuthorsCollection();
    const authors = await authorsCollection.find({}, { projection: { biography: 0, _id: 0 } }).toArray();
    return authors;
}


async function getAuthorById(id) {
    const authorsCollection = await getAuthorsCollection();
    const author = await authorsCollection.findOne({ id });
    if(author){
      return author;
    }else{
      return `No author found with the given ID ${id}.`;
    }
    
}


async function addNewAuthor(newAuthor) {
    const authorsCollection = await getAuthorsCollection();
    const result = await authorsCollection.insertOne(newAuthor);
    return result.insertedId;
}


async function updateAuthorDetails(prevId, updateAuthorObj) {
    const authorsCollection = await getAuthorsCollection();
    const result = await authorsCollection.updateOne(
        { id :prevId},
        { $set: updateAuthorObj}
    );
    if (result.matchedCount > 0) {
        return "Successfully updated the author details.";
    } else {
        return `No author found with the given ID ${prevId}.`;
    }
}


async function deleteAuthorById(id) {
    const authorsCollection = await getAuthorsCollection();
    const result = await authorsCollection.deleteOne({ id });
    if (result.deletedCount > 0) {
        return `Author with ID "${id}" deleted.`;
    } else {
        return `No author found with the given ID ${id}.`;
    }
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthorDetails,
    deleteAuthorById
};
