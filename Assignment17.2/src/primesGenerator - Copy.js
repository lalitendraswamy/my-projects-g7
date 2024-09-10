const { isPrimeSync } = require('./primes');

const primeRange = function* (min, max) {
    let skip = null;
    let primes = [];
    
    for (let i = min; i < max; i++) {
        if (isPrimeSync(i)) {
            primes.push(i);
        }
    }
    
    let index = 0;
    
    while (index < primes.length) {
        if (skip !== null && skip > 0) {
            skip--;
        } else {
            skip = yield primes[index++];
        }
    }
    
    // End of iteration
    yield undefined;
};

// Example usage
let primes = primeRange(2, 20);

console.log(primes.next(4).value);  // Should log 2
console.log(primes.next().value);   // Should log 11
console.log(primes.next().value);   // Should log 13
console.log(primes.next().value);   // Should log 17
console.log(primes.next().value);   // Should log 19
