

class UserService{

    constructor(userRepository){
        this.userRepository = userRepository;
    }

    getUsers(){
        return this.userRepository.getUsers();
    }

    addUser(user){
        return this.userRepository.addUser(user);
    }

    getUserBookshelf(userId){
        return this.userRepository.getUserBookshelf(userId)
    }

    addBookToUserBookshelf(userId,book){
        return this.userRepository.addBookToUserBookshelf(userId,book);
    }

   

}


module.exports = UserService;