// Function to find prime numbers in an array

function findPrimes(numbers) {
    const primes = [];
  
    // Looping through each number in the input array
    for (let num of numbers) {
      if (num <= 1) continue;
  
      // Check if the number is prime and add it to the primes array if so
      if (isPrime(num)) primes.push(num);
    }
    return primes;
  }
  
// Function to check if a number is prime or not

function isPrime(num) {

    // Loop from 2 to the square root of the number for efficient divisibility check
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by any number in this range, it's not prime
      if (num % i === 0) return false;
    }
  
    // If the loop completes without finding any divisors, the number is prime
    return true;
  }
  
  console.log(findPrimes([10, 11, 12, 13, 14, 15, 16, 17, 18])); // Output: [ 11, 13, 17 ]

  