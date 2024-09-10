class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class LinkedList{

    constructor(){
        this.first=null;
    }

    
    append(data){
        var newNode= new Node(data)
        console.log(newNode)
        if(this.first===null){
            this.first=newNode
        }else{
        var current=this.first;
        while(current.next!==null){
            current=current.next;
        }
        
        current.next=newNode;
    }

    }

    insert(index,value){

    }

    show(){
        var current=this.first;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

    length(){
        var current=this.first;
        var c=0;
        while(current){
            c++;
            current=current.next;
        }
        console.log('length',c);
    }




}

var list= new LinkedList();

list.append(12);
list.append(7);
list.append(9);


list.show();
list.length();