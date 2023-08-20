// Find if a number is even or not 

function getRandomNumber(start,end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let randomNumber = getRandomNumber(1,10);
console.log(randomNumber);

randomNumber % 2 === 0 ? console.log(true) : console.log(false);


console.log("-------------------------------------------");


// Find if a number is odd or not 

function getRandomNumber(start,end) {
    return Math.floor(Math.random() * (end - start + 1)) + start
}

let randomNumber1 = getRandomNumber(1,10);
console.log(randomNumber1);

if (randomNumber1 % 2 !== 0) console.log(true);
else console.log(false);


console.log("-------------------------------------------");

// Find if a number is positive or not

let randomNumber2 = getRandomNumber(-5, 5);
console.log(randomNumber2);

randomNumber2 > 0 ? console.log(true) : console.log(false);


console.log("-------------------------------------------");

// Find if a number is negative or not 

let randomNumber3 = getRandomNumber(-5,5);
console.log(randomNumber3);

randomNumber3 < 0 ? console.log(true) : console.log(false);


console.log("-------------------------------------------");

// Find if a number is divisible by 5 or not 

let randomNumber4 = getRandomNumber(1,50);
console.log(randomNumber4);

randomNumber4 % 5 === 0 ? console.log(true) : console.log(false);


console.log("-------------------------------------------");

// Find if a number is divisible by 7 or not
let randomNumber5 = getRandomNumber(1,50);
console.log(randomNumber5);

randomNumber5 % 7 === 0 ? console.log(true) : console.log(false);


console.log("-------------------------------------------");

// Calculate the sum of 2 random Numbers 

let randomNumber6 = getRandomNumber(1,10);
let randomNumber7 = getRandomNumber(1,10);

console.log(randomNumber6);
console.log(randomNumber7);

console.log(randomNumber6 + randomNumber7);


console.log("-------------------------------------------");

// Calculate the absolute difference between 2 random numbers 

let randomNumber8 = getRandomNumber(1,10);
let randomNumber9 = getRandomNumber(1,10);

console.log(randomNumber8);
console.log(randomNumber9);

console.log(Math.abs(randomNumber8 - randomNumber9));


console.log("-------------------------------------------");

// Calculate the product of 2 random numbers

let randomNumber10 = getRandomNumber(1,10);
let randomNumber11 = getRandomNumber(1,10);

console.log(randomNumber10);
console.log(randomNumber11);

console.log(randomNumber10 * randomNumber11);


console.log("-------------------------------------------");

// Calculate the square of a number 

let randomNum = getRandomNumber(1,10);
console.log(randomNum);

console.log(randomNum * randomNum);


console.log("-------------------------------------------");


// Calculate the cube of a number 

let randomNum1 = getRandomNumber(1,10);
console.log(randomNum1);

console.log(randomNum1 * randomNum1 * randomNum1);


console.log("-------------------------------------------");

// Convert miles to kilometers 

let randomNum2 = getRandomNumber(1,10);
console.log(randomNum2);

console.log(randomNum2 * 1.6);

console.log("-------------------------------------------");

// First two characters

function firstTwoCharacters(str) {
    if (str.length > 2) return str[0] + str[1];
    else return str;
}

console.log(firstTwoCharacters("Tech"));


console.log("-------------------------------------------");

// Last Characters

function lastCharacter(str) {
    return str[str.length - 1];
}

console.log(lastCharacter("123"));


console.log("-------------------------------------------");

// Last two characters 

function lastTwoCharacters(str) {
    return str[str.length - 2] + str[str.length - 1];
}

console.log(lastTwoCharacters("Tech"));

console.log("-------------------------------------------");

/*
console.log("-------------------------------------------");

// First and Last characters 

function firstLast(str) {
    if (str.length < 2) return str;
    else return str[0] + str[str.length - 1];
}

console.log(firstLast("TechGlobal"));


console.log("-------------------------------------------");

// Has five

function hasFive(str) {
    if (str.length > 5) return true;
    else return false;
}

console.log(hasFive("Global"));

console.log("-------------------------------------------");

// Middle

function middle(str) {
    if (str.length % 2 !== 0) return (str[Math.floor(str.length / 2)]);
    else if (str.length % 2 === 0) return (str[str.length / 2 - 1] + str[str.length / 2]);
    else return str;
}

console.log(middle("Tech"));

console.log("-------------------------------------------");


// Longer String

function longer(str,str1) {
    if (str.length >= str1.length) return str;
    else return str1;
}

console.log(longer("Hellos", "World"));


console.log("-------------------------------------------");

// Shorter String

function shorter(str,str1) {
    if (str.length > str1.length) return str1;
    else return str;
}

console.log(shorter("Hello", "Hi"));


console.log("-------------------------------------------");

// Concat Two String

function concat(str, str1) {
    return str + str1;
}

console.log(concat("Tech", "Global"));

console.log("-------------------------------------------");

// Starts with Vowel

function startsVowel(str) {
    if (str.toLowerCase().startsWith("a") || str.toLowerCase().startsWith("e") || str.toLowerCase().startsWith("i") || str.toLowerCase().startsWith("o") || str.toLowerCase().startsWith("u")) return true;
    else return false;
}

console.log(startsVowel("Tech"));

*/