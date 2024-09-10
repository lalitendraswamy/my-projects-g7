var { isPrimeSync } = require('./primes');

const primeRange = function*(min, max) {
    let skip = 0;

    for (let i = min; i < max; i++) {
        if (isPrimeSync(i)) {
            if (skip > 0) {
                skip--;
                continue; // Skip this prime
            }
            skip = yield i; // Yield the prime and receive the next `skip` value
        }
    }
};

let primes = primeRange(2, 50);

console.log(primes.next(0)); // Start the generator
console.log('skip',primes.next(2)) // Skip 2 primes
console.log(primes.next());


module.exports = {
    primeRange
};
