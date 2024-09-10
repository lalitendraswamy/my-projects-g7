var {LinkedList}= require('./list');

var list=new LinkedList();

console.log('list',list); //object as JSON

console.log(`list : ${list}`); //invokes list.toString();

var testNumbers=[2,3,9,2,6];

for(var number of testNumbers)
    list.append(number);


console.log('list',list);

console.log(`list : ${list}`); //invokes list.toString();

console.log('list.toString()',list.toString());

console.log('list.length()',list.length());


for(var i=0; i<list.length(); i++)
    console.log(`list.get(${i})`,list.get(i));

//console.log(list.get(100));

for(var i=0;i<list.length();i++){
    list.set(i, list.get(i)*10);
}

console.log('list.toString()',list.toString());

list.remove(4); //last item 60
list.remove(2); //90
list.remove(0); //20

console.log('list.toString()',list.toString());


list.insert(1,7);
list.insert(1,8);
list.insert(0,0);

list.insert(-2,12);

console.log('list.toString()',list.toString());
console.log(`index =`,list.indexOf(7,5))




function createList(count){ 

    var list=new LinkedList(); 
    
    for(var i=1;i<=count;i++) 
    
    list.append(i); 
    
     
    
    return list; 
    
    } 
         
    
    function sumList(list){ 
    
    var result=0; 
    
    for(var i=0;i<list.length();i++)
    
    result+=list.get(i);   
     
    
    return result; 
        
    
    } 
    
        
    //find how much time will the below code take 
    
    var count=100000; 
    
    //time#1 
    
    
    var start=performance.now(); 
    var list = createList(count); 
    var end=performance.now(); 
    console.log('total time taken to create list', end-start); 
    
        
    //time#2 
    var start=performance.now(); 

    var result = sumList(list); 

    var end=performance.now(); 
    console.log('total time taken to sum list', end-start); 
    
    
     
    
    //print time#1 and time#2


    
