
let NotFoundException = require('../../utils/not-found');
var {executor,connect} =require('../../connection');

var url='mongodb://localhost:27017';
var usersExecutor=executor(url, "g7cr_202408","users");





class InMemoryUserRepository{

    
    async getUsers(){
        
        return await usersExecutor(async (users)=>{
            return await users.find({}).toArray();
        })   
    } 


    async addUser(user){
        return await usersExecutor(async (users)=>{

            return await users.insertOne(user);
        }) 
    }

    async getUserBookshelf(userId){
        return await usersExecutor(async (users)=>{

            return await users.findOne(
                { id: userId },
                { projection: { bookshelf: 1, _id: 0 } }
            );
        }) 
    }

    
   
    async addBookToUserBookshelf(userId,bookObj) {
        return await usersExecutor(async (users) => {
            const result = await users.updateOne(
                { id: userId },
                { $push: { bookshelf: bookObj } }
            );

        });
    }


    

    

    

}

module.exports=new InMemoryUserRepository();