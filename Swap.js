//function that takes a string as input and swaps the case of each character
function Swap(str){

    //split string into an array of characters
    let char = str.split('');

    //iterate through each character in the array
    for(let index = 0; index < char.length; index++){

        //checking the case of each character. If uppercase, swap to lowercase and viceversa.
        if(char[index] === char[index].toUpperCase()){

            char[index] = char[index].toLowerCase();

        }

        else{

            char[index] = char[index].toUpperCase();

        }

    }

    //join the characters back together to form a string
    let newStr = char.join('');

    //output
    return newStr;

}

//test function 
console.log(Swap('The Quick Brown Fox'))