//function that takes a string as input and swaps the case of each character
function Swap(str){

    let words = str.split('');

    for(let index = 0; index < words.length; index++){

        if(words[index] === words[index].toUpperCase()){

            words[index] = words[index].toLowerCase();

        }

        else{

            words[index] = words[index].toUpperCase();

        }

    }

    let newStr = words.join('');

    return newStr;

}

console.log(Swap('The Quick Brown Fox'))