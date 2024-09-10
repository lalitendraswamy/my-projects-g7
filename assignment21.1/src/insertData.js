// const { connect, disconnect } = require('./connection');

// const url = 'mongodb://localhost/'; 


// async function insertData(collectionName, data) {
//     const connection = await connect(url);
//     const db = connection.db('g7cr_202408');
//     const collection = db.collection(collectionName);

//     let result;
//     if (Array.isArray(data)) {
//         result = await collection.insertMany(data);
//     } else {
//         result = await collection.insertOne(data);
//     }

   
//     return result;
// }

// module.exports = {
//     insertData
// };
