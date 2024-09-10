var {isPrimeSync}=require('./primes')

const primeRange=function *(min,max){
    let result;
    
    for (let i=min; i<max;i++){
        
        if(result){
            while(result){
                if(isPrimeSync(i)){
                    result--
                }
                i++
            }
        }
    
        if(isPrimeSync(i)){
            result=yield(i)
        }

    }
}



let primes=primeRange(2,50);

console.log(primes.next().value)
console.log(primes.next().value);
console.log(primes.next(4).value);
console.log(primes.next().value)

module.exports={
    primeRange
}