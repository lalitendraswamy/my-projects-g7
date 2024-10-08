class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }   
}

class LinkedList{
    constructor(){
        this.first=null; //I have an empty list
    }
    
    append(item){
        //Step #1. we got a value; not a node.
        var newNode=new Node(item); //next is null.

        //Situation #1: Appending as the first item of an empty list.
        //Append as the first item.
        if(this.first===null){
            this.first=newNode;
            return ;
        }

        //else
        //Situation #2: Adding at the end of a non-empty list.
        //Append as the next of last item.
        var n=this.first;
        while(n.next){ //while it is not the last node.
            n=n.next; //move towards the last
        }

        //now n is the last node
        n.next=newNode;



    }
    
    toString(){
        var str="LinkedList(\t";
        for(var n=this.first; n ;  n=n.next){
            str+=`${n.data}\t`
        }
        return str+")";
    }

    insert(index, item){
        //insert item at given index
        index= this.checkIndex(index)

        

        var newNode=new Node(item);
        if(index==0){
            newNode.next=this.first;
            this.first=newNode;
            return;
        }    
       
        
        var n=this.first;
        for(var i=0;i<index-1;i++){
            
            n=n.next;
            
        }

        var temp=n.next;
        newNode.next=temp;

        n.next=newNode;
    }


    length(){
        var i=0;
        for(var n=this.first; n; n=n.next)
            i++;
        return i;
    }
    

    remove(index){
        //remove item at given index
        
        index= this.checkIndex(index)

        //Case #1 removing item 0
        if(index==0){
            var value=this.first.data;
            this.first=this.first.next;
            return value;
        }

        //Case 2 removing non-0 item
        //reach the n-1 position
        var n=this.first;
        for(var i=0; i<index-1; i++)
            n=n.next; //reach to the (n-1)th node

        var value=n.next.data; //save the data to be removed
        n.next=n.next.next; //skip the node to be removed
        return value;

    }

    get(index){
        //get item at given index
        index= this.checkIndex(index)

        var n=this.first;
        for(var i=0;i<index;i++)
            n=n.next; //reach to the right node

        return n.data;

    }

    set(index, item){
        
        //set item at given index
        index= this.checkIndex(index)

        var n=this.first;
        for(var i=0;i<index;i++)
            n=n.next; //reach to the right node

        n.data=item;

    }

    indexOf(item,startIndex=0){
        var n=this.first;
        for(var i=0;i<this.length();i++){

            if(i>=startIndex){
                if(item==n.data){
                    return i;
                }
            }
            n=n.next; //reach to the right node
        }
            
        return -1;  

        
    }


    // Reusable functions

    checkIndex(index){
        if(index>=this.length() || index<=((this.length())*(-1)))
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        if(index<0){
            var l=this.length();
            index=l+index;
        }
        
        return index;

    }

    
}



try{



    module.exports.Node=Node;
    module.exports.LinkedList=LinkedList;



}catch(e){

}


