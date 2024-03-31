//function that check whether a number is prime or not
function isItPrime(number) {

  //if the number is a negative or 0, it is not a prime number
  if (number <= 1) {

    return false;

  } 
  else {
    
    /*checking whether number is prime. A number is only prime if it is divisible only by itself and 1.
     Start checking for divisibility from 2 until the number before the number in question*/
    for (let index = 2; index < number; index++) {

      if (number % index === 0) {

        return false;

      }

    }

    return true;
  }
}

//function that takes an array as input and returns a new array containing only prime numbers from original array.
function PrimeNumberGenerator(arr) {
 
  //declare variable to store the array of prime numbers
  let primeNumberArray = [];

  //iterate through each number in the input array checking whether it is prime or not
  for (let index = 0; index < arr.length; index++) {

    //if the number is a prime number, push it to the array of prime numbers
    if (isItPrime(arr[index])) {

      primeNumberArray.push(arr[index]);
      
    }
  }

  //output
  return primeNumberArray;
}

//test function
console.log(PrimeNumberGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
