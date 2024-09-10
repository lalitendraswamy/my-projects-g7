var {LinkedList}= require('./list');

var list=new LinkedList(1,2,9,4,8);
console.log('original',list.toString());


list.forEach((v,i)=>console.log(v));

console.log('');
var filteredList= list.filter(v=> v>=5)
console.log('filtered',filteredList.toString());


console.log('');
var findResult= list.find(v => v===8);
console.log('find result',findResult);

console.log('');
var findWithForEachResult= list.findWithForEach(v => v===2);
console.log('findWithForEach result',findWithForEachResult);


