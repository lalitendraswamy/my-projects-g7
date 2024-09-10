let express = require('express');
let userController = require('../controllers/user-controller');
let handleRequest=require('../utils/handler')


var users = express.Router();

users.route("/")
    .get(handleRequest(userController.getUsers))
    .post(handleRequest((request, response) => {
        userController.addUser(request,response);
    })); 

users.route("/:userId/bookshelf")
    .get(handleRequest(userController.getUserBookshelf))
    .post(handleRequest((request, response) => {
        userController.addBookToUserBookshelf(request,response);
    })); 

module.exports=users;