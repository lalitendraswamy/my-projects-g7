
let NotFoundException = require('../../utils/not-found');
var {executor,connect} =require('../../connection');

var url='mongodb://localhost:27017';
var booksExecutor=executor(url, "g7cr_202408","books");





class InMemoryBookRepository{

    
    async getBooks(){
        
        return await booksExecutor(async (books)=>{
            return await books.find({}).toArray();
        })   
    } 


    async addBook(book){
        return await booksExecutor(async (books)=>{

            return await books.insertOne(book);
        })
    }


    async getBookById(book_id){
        
        return await booksExecutor(async (books)=>{

            return await books.find({id:book_id}).toArray();
        })
    }

    async updateBook(prevId,updatebookObj){
        return await booksExecutor(async (books)=>{

            return await books.updateOne(
                { id :prevId},
                { $set: updatebookObj}
            );
        })
    }

    async deleteBookById(id){
        
        return await booksExecutor(async (books)=>{

            return await books.deleteOne({ id });
        })
    }

    async getBookReviews(book_id) {
        return await booksExecutor(async (books) => {
            
            const book = await books.findOne({ id: book_id });           
            
            if (book && book.reviews) {
                return book.reviews;
            } 
        });
    }


    async addBookReview(book_id, review) {
        return await booksExecutor(async (books) => {
           
            return result = await books.updateOne(
                { id: book_id }, 
                {
                    $push: { reviews: review } 
                }
            );
    
            
        });
    }
    
    


    

    
    
    async getReviewByBook(book_id, review_id) {
        return await booksExecutor(async (books) => {
            const book = await books.findOne({ id: book_id }, { projection: { reviews: 1 } });
    
            if (!book) {
                throw new NotFoundException("Book not found", { id: book_id });
            }
    
            const review = book.reviews.find(r => r._id === review_id);
    
            if (!review) {
                throw new NotFoundException("Review not found", { reviewId: review_id });
            }
    
            return review;
        });
    }
    
    async updateBookReviewById(book_id, review_id, updateReviewObj) {
        return await booksExecutor(async (books) => {
            return await books.updateOne(
                { id: book_id, "reviews._id": review_id },
                { $set: updateReviewObj }
            );
    
            
        });
    }
 
    async deleteBookReviewById(book_id, review_id) {
        return await booksExecutor(async (books) => {
            return result = await books.updateOne(
                { id: book_id },
                {
                    $pull: { reviews: { _id: review_id } }
                }
            );
    
            
        });
    }
    

    async getBooksByCategory(category){
        return await booksExecutor(async (books) => {
            return await books.find({ tags: category },{projection:{title:1,tags:1,_id:0}}).toArray();
        });
    }
    
    

}

module.exports=new InMemoryBookRepository();
