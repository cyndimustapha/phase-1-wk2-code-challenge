//function that takes a string as input and swaps the case of each character
function Swap(str){

    //split string into individual words
    let words = str.split('');

    //iterate through each letter in a word
    for(let index = 0; index < words.length; index++){

        //checking the case of each letter. If uppercase, swap to lowercase and viceversa.
        if(words[index] === words[index].toUpperCase()){

            words[index] = words[index].toLowerCase();

        }

        else{

            words[index] = words[index].toUpperCase();

        }

    }

    //join the words back together to form a string
    let newStr = words.join('');

    //output
    return newStr;

}

//test function 
console.log(Swap('The Quick Brown Fox'))