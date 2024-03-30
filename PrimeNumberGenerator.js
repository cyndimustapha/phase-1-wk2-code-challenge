//program that takes an array as input and returns a new array containing only prime numbers from original array.

//function that check whether a number is prime or not
function isItPrime(number) {
    if (number <= 1) {

      return false;

    }

    for (let index = 2; index <= Math.sqrt(number); index++) {

      if (number % index === 0) {

        return false;

      }

    }

    return true;
    
  }
  
  function PrimeNumberGenerator(arr) {

    let newArr = [];
  
    for (let index = 0; index < arr.length; index++) {

      if (isItPrime(arr[index])) {

        newArr.push(arr[index]);

      }
    }
  
    return newArr;
  }
  
  console.log(PrimeNumberGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));