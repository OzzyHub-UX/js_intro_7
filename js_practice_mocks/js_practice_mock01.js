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


function middle(str) {
    if (str.length % 2 !== 0) console.log(str[Math.floor(str.length / 2)]);
    else console.log(str[str.length / 2 - 1] + str[str.length / 2]);
}

console.log(middle("Akin"));


console.log("-------------------------------------------");
