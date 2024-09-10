class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}


class BooksList{
    constructor(){
        this.first=null;

    }

    addBook(book_data){
        
        var newNode= new Node(book_data)
        
        var head=this.first
        
        if(!this.first){
            this.first= newNode;
        }else{
            while(head.next){
                head=head.next;
            }
            head.next=newNode;
            
        }      
        
    }

    getBooks(){
        
        var books=[]
        for(var n=this.first; n ;  n=n.next){
            books.push(n.data);
        }
        
        return books;
    }

    deleteBook(title){
       
        if(this.first==null){
            throw new Error('Parameter is not a number!');
        }
        
        if(!this.first.next && this.first.data.title===title){
            this.first=this.first.next;
            return;
        }else{
            for(var n=this.first; n; n=n.next){

                if(!n.next){
                    break;
                }
                var nextNode=n.next;

                if(nextNode.data.title==title ){
                    n.next=nextNode.next;            
                    break
                }
            } 
            
        }  
        
        return `Book is not found with name ${title}`;
    }

    updateBook(title, book_data){
       

        for(var n=this.first; n; n=n.next){

            
            if(n.data.title===title){
                n.data=book_data;
                
                break;
            }
        }        
    }

    findByAuthor(author){
        var books=[];

        for(var n=this.first; n ;n=n.next){
            if(n.data.author===author){
                books.push(n.data);
            }
        }

        return books;
    }

    findByPrice(start,end){
        var books=[];

        for(var n=this.first; n ;n=n.next){
            if(n.data.price>=start && n.data.price<=end){
                books.push(n.data);
            }
        }

        return books;
    }

    findByTitle(title){
        var book={};
       
        for(var n=this.first; n ;n=n.next){
            if(n.data.title===title){
                book=n.data;
            }
        }

        return book;
    }
    
}




try{



    module.exports.Node=Node;
    module.exports.BooksList=BooksList;



}catch(e){

}

