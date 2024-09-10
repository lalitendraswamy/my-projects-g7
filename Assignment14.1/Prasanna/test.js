var {LinkedList} = require('../../node-js-demos/src/list.js');
var {In,fill,findBy} = require("./frameworks.js");
require('../../node-js-demos/src/list-extension.js');
var {BookManager} = require('../../node-js-demos/src/book-manager.js')
var book = new BookManager();
const {measureTime} = require("./mesure");


console.log(fill("array","constant",10,2));
console.log(fill("list","range",10,200)); //[10,11,12 .toExponential.apply.apply. 2002]
console.log(fill("array","random",10)); //[93,52,...upto]
console.log(fill("list","fibonacci",10));//[0,1,1,2,3,,...upto]
console.log(fill("array","primes",2,200));//[2,3,5,7,11,13,17,...upto]

// measureTime(book._books.filter(findAnd({author:"Vivek Dutta Mishra"})));
measureTime(fill("list","range",10,200));