var {LinkedList} = require('../../node-js-demos/src/list.js');
require('../../node-js-demos/src/list-extension.js');

function findBy(object) {
    return (bookItem) => {
      for (let key in object) {
        const condition = object[key]; //
        if (typeof condition === "function") {
          const result = condition(bookItem[key]);
        //    console.log(result)
          if (result === undefined || result === false) return false;
        } else {
          if (bookItem[key] !== object[key]) return false;
        }
      }
      return true;
    };
  }
  
function In(...substring) {
    return (bookItemValue) => {
        let items = substring.map((item) => item.toLowerCase())
        return items.includes(bookItemValue.toLowerCase())
            ? bookItemValue
            : undefined;
    };
  }


  const fillSeries = {
    'constant': repitedItem,
    'range': alternateItems,
    'random': rondamItems,
    'fibonacci': fibonacciItems,
    'primes': primeItems

};

  function fill(collection,series,...args){ 
      let collectionType = collection === "list"? new LinkedList(): [];
      fillSeries[series](collection,collectionType,args);
    return collectionType;
    
    } 

function repitedItem(collection,collectionType,args){
  let x = args[0] ;
  let y = args[1];
  // console.log(typeof collectionType,args)
  for (var i = 0; i < x;i ++)
        collection === 'array' ? collectionType.push(y):collectionType.append(y); 
  return collectionType;
}

function alternateItems(collection,collectionType,args){
  let x = args[0] ;
  let y = args[1];
  // console.log(typeof collectionType,args)
  for (var i = x; i < y;i ++)
    collection === 'array' ? collectionType.push(i):collectionType.append(i); 
  return collectionType;

}

function rondamItems(collection,collectionType,args){
  for (var i = 0; i < args;i ++){
    let randomNumber =  Math.ceil(Math.random()*100);
    collection === 'array' ? collectionType.push(randomNumber):collectionType.append(randomNumber); 
  }
  return collectionType;
}

function fibonacci(n){
   return n <= 1 ? n:fibonacci(n-1)+fibonacci(n-2);
}

function  fibonacciItems(collection,collectionType,args){
  for (var i = 0; i < args;i++){
    let sumOfTwo = fibonacci(i);
    collection === 'array' ? collectionType.push(sumOfTwo):collectionType.append(sumOfTwo); 
  }
  return collectionType;  
}

function  primeItems(collection,collectionType,args){
  let n = args[0] ;
  let m = args[1];

  if(n < 0){
    n = 2;
  }

  for (var i = n; i < m+1; i++){
    let count = 0;
    for (var j=2; j < i;j++){
         if(i%j === 0){
            count++;
         }
    }
    if(count === 0){
      collection === 'array' ? collectionType.push(i):collectionType.append(i); 
      }
    }
   return collectionType;

}

function endsWith(substring){
  return (bookItemValue)=>bookItemValue.toLowerCase().endsWith(substring.toLowerCase())
}

function startsWith(substring){
  return (bookItemValue)=>bookItemValue.toLowerCase().startsWith(substring.toLowerCase())
}

try {
    module.exports ={
        startsWith,
        endsWith,
        In,
        repitedItem,
        rondamItems,
        primeItems,
        fibonacciItems,
        fill,
        alternateItems,
        fibonacci,
        findBy
    }
    }catch{
    
    }


  
  