var {DoublyLinkedList}= require('./dl-list');


var list = new DoublyLinkedList(60,90,77,13);

list.append(7);
list.append(9);
list.append(3);

console.log(list.toString());



list.remove(-1);
console.log(list.toString());

list.insert(0,11);
console.log(list.toString());


console.log(list.get(-1));