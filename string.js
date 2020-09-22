//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

function drEvil (amount) {
    if(amount === 1000000){
        console.log(`${amount} dollars (pinky)`);
    } else {
        console.log(`${amount} dollars`);
    }
}

console.log(drEvil(1000000));





//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 


function mixUp(a, b) {
    return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  }



//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below

function fixStart(s) {
    let c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
  }




//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below


// not required ot do .


//Create a function called notBad that takes a single argument, a string
//It should find the first appearance of the substring 'not' and 'bad'
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just 
//return the original sentence
//For example
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'
//write answer below 

function notBad(input)
{
    let indexOfNot = input.indexOf('not');
    let indexOfBad = input.indexOf('bad');
    if ((indexOfNot == -1) || (indexOfBad == -1) || (indexOfBad < indexOfNot))
        return input;
    else
        return input.slice(0, indexOfNot) + 'good' + input.slice(indexOfBad + 3);
}