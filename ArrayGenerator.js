//function that accepts two numbers as input and generates an array of the two numbers between them
function ArrayGenerator(num1, num2) {
  
  let arr = [];

  for (let count = num1; count <= num2; count++) {

    arr.push(count);

  }
  return arr;

}

console.log(ArrayGenerator(-4, 7));
