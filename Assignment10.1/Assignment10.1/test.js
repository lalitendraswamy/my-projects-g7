var {LinkedList}= require('./list');

var list=new LinkedList();

// console.log('list',list); //object as JSON

// console.log(`list : ${list}`); //invokes list.toString();

var testNumbers=[2,3,9,2,6];

for(var number of testNumbers)
    list.append(number);


// console.log('list',list);

// console.log(`list : ${list}`); //invokes list.toString();

// console.log('list.toString()',list.toString());

// console.log('list.size()',list.size());


// for(var i=0; i<list.size(); i++)
//     console.log(`list.get(${i})`,list.get(i));

//console.log(list.get(100));

// for(var i=0;i<list.size();i++){
//     list.set(i, list.get(i)*10);
// }


// list.remove(4); //last item 60
// list.remove(2); //90
// list.remove(0); //20

// console.log('list.toString()',list.toString());

// list.insert(0,100);

// list.insert(2,50);
// list.insert(2,80);
// list.insert(2,90);

// console.log('list.toString()',list.toString());


// console.log('list.get(-1)',list.get(-1));



// var list2= new LinkedList(4,2,9,1,1);
// list2.append(2,3,9,6,2)

// console.log(`Lis is ${list2}`);

console.log('list.toString()',list.toString());
var list2= list.average();
console.log('list.toString()',list2.toString());