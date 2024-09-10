let userRepository= require('../repositories/mongodb/user-repository');
let UserService = require('../services/user-service');


var service = new UserService(userRepository);


async function getUsers(req) {
    return await service.getUsers();
}

async function addUser(req) {
    return await service.addUser(req.body);
}

async function getUserBookshelf(req) {
    return await service.getUserBookshelf(req.params.userId);
}

async function addBookToUserBookshelf(req){
    return await service.addBookToUserBookshelf(req.params.userId,req.body);
}

module.exports={
    getUsers,
    addUser,
    getUserBookshelf,
    addBookToUserBookshelf
}