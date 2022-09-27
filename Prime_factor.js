var getPrimeFactors = function (n) {
    "use strict";

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var i, sequence = [];
    var primeArray = [];

    for (let i = 2; i <= n; i++) {
        if (n % i !== 0) continue;
    
        // Check if the divisor is a prime number
        for (let j = 2; j <= i / 2; j++) {
          isPrime = i % j !== 0;
        }
    
        if (!isPrime) continue;
        // if the divisor is prime, divide integer with the number and store it in the array
        n /= i
        primeArray.push(i);
      }
    
      return primeArray;
    // }
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));