var {LinkedList} = require('./list')

var numsList=new LinkedList()




var count=100000;

for(let i=0;i<count;i++){
    numsList.append(Math.ceil(Math.random(i)*10));

    
}



var startTime= performance.now()

var sortedList= numsList.sortedList((a,b)=>a<b);



var endTime= performance.now()

console.log('time taken in ms', endTime-startTime);







