class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(...values) {
    this.head = null;
    this.size = 0;

    this._currentIndex = undefined;
    this._current = null;

    for (var value of values) {
      this._append(value);
    }
  }

  validateIndex(index) {
    
    if (typeof index !== "number")
      throw new TypeError("Index must be a number");

    if (index < 0) index += this.size;

    if (index < 0 || index >= this.size)
      throw new RangeError(
        `Index out of range: ${index}. valid range=(0-${this.size - 1})`
      );

    return index;
  }

  append(...values) {
    for (var value of values) {
      this._append(value);
    }
  }

  _append(data) {
    var newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.size += 1;
      return;
    }

    var current = this.head;
    while (current.next) {
      current = current.next;
    }

    newNode.prev = current;
    current.next = newNode;
    this.size += 1;
  }

  locate(index) {
    index = this.validateIndex(index);

    var current = this.head;
    var startIndex = 0;
    var steps = index;

    if (this._current && this._currentIndex < index) {
      startIndex = this._currentIndex;
      current = this._current;
      steps = index - this._currentIndex;

      for (var i = 0; i < steps; i++) {
        current = current.next;
    }

    }else if (this._current && this._currentIndex > index) {
        startIndex = this._currentIndex;
        current = this._current;
        steps = this._currentIndex-index;

        for (var i = 0; i < steps; i++) {
            current = current.prev;
        }

    }else{
        for (var i = 0; i < steps; i++) {
            current = current.next;
        }
    }

    console.log(`locating from start index=${startIndex} to end index=${index}\tsteps=${steps}`);

    

    this._current = current;
    this._currentIndex = index;
    
    return current;
  }

  toString() {
    var str = "DoublyLinkedList(\t";

    for (var n = this.head; n; n = n.next) {
      str += n.data + "\t";
    }

    return str + ")";
  }

  update(index,value){
    
    index= this.validateIndex(index);
    var current= this.locate(index);
    current.data=value;
    

  }

  insert(index,value){
    var newNode= new Node(value);
    index= this.validateIndex(index);
    if (index===0){
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
        return;
    }
    
    var current= this.locate(index-1);    

    newNode.next=current.next;
    newNode.prev=current;

    current.next.prev=newNode;
    current.next=newNode;
    this.size++;
    

  }

  remove(index){
    
    index= this.validateIndex(index);
    if (index>0){
        var current= this.locate(index-1);
        current.next= current.next.next;
        
        if(current.next){
            current.next.prev=current;
        }
        this.size--;
    }else{
        this.head=this.head.next;

        this.head.prev=null;
        this.size--;
    }
    
    
    
}

get(index){
    index=this.validateIndex(index)
    var current= this.locate(index);
    
    if (index===this.size-1){
        var current= this.locate(index-1);
        return current.next.data
    }
    return current.data;
}

  length() {
    return this.size;
  }
}

try {
  module.exports.DoublyLinkedList = DoublyLinkedList;
  module.exports.Node = Node;
} catch (e) {}




