//function that accepts two numbers as input and generates an array of the two numbers between them
function ArrayGenerator(num1, num2) {
  
  //declare variable to store the array of numbers
  let arr = [];
  
  //starting from the first input number, iterate through every subsequent number until the second input number is reached
  for (let count = num1; count <= num2; count++) {
 
    //push the numbers into an array
    arr.push(count);

  }

  //output
  return arr;

}

//Test function
console.log(ArrayGenerator(-4, 7));
