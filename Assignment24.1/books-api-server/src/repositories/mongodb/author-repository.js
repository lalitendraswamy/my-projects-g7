
let NotFoundException = require('../../utils/not-found');
var {executor,connect} =require('../../connection');

var url='mongodb://localhost:27017';
var authorsExecutor=executor(url, "g7cr_202408","authors");





class InMemoryAuthorRepository{

    
    async getAllAuthors(){
        
        return await authorsExecutor(async (authors)=>{
            return await authors.find({}).toArray();
        })   
    } 


    async addAuthor(author){
        return await authorsExecutor(async (authors)=>{

            return await authors.insertOne(author);
        })
    }


  
    async getAuthorById(aid){
        
        return await authorsExecutor(async (authors)=>{

            const author = await authors.find({ id: aid }).toArray();
            if (!author) {
                throw new NotFoundException('Author not found');
            }
            return author;
        })
    }

    async updateAuthor(prevId,updateAuthorObj){
        return await authorsExecutor(async (authors)=>{

            return await authors.updateOne(
                { id :prevId},
                { $set: updateAuthorObj}
            );
        })
    }

    async deleteAuthorById(id){
        
        return await authorsExecutor(async (authors)=>{

            return await authors.deleteOne({ id });
        })
    }

    async getAuthorBooks(id) {
        return await authorsExecutor(async (authors) => {
            return await authors.aggregate([
                {
                    $match: { id: id }  
                },
                {
                    $lookup: {
                        from: 'books',              
                        localField: 'id',           
                        foreignField: 'authorId',  
                        as: 'book'           
                    }
                },
                {
                    $unwind: {
                        path: '$book',     
                        preserveNullAndEmptyArrays: true  
                    }
                },
                {
                    $project: {
                        'book.title':1,
                        _id:0
                    }
                }
            ]).toArray();
        });
    }


   
    

    

}

module.exports=new InMemoryAuthorRepository();
