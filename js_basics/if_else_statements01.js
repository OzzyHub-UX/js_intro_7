

/*
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is ONE" if the generated number is one
*/

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1))  + start; 
}

let randomNumber1 = getRandomNumber(0,1);

console.log(randomNumber1);

if (randomNumber1 === 0) {
    console.log("The number is ZERO");
}
else {
    console.log("The number is ONE");
}


console.log("\n-------------------------\n");

let randomNumber2 = getRandomNumber(1, 10);

console.log(randomNumber2);

if (randomNumber2 % 2 === 0) {
    console.log("The number is EVEN");
}
else {
    console.log("The number is ODD");
}


console.log("\n-------------------------\n");

/*
Generate a random number between -2 and 2 (both inclusive)
Print "The number is POSITIVE" if the generated number is positive
Print "The number is NEGATIVE" if the generated number is negative
Print "The number is ZERO" if the generated number is zero
*/

let randomNumber3 = getRandomNumber(-2, 2);

console.log(randomNumber3);

if (randomNumber3 === 0) {
    console.log("The number is ZERO");
}
else if (randomNumber3 > 0) {
    console.log("The number is POSITIVE");
}
else {
    console.log("The number is NEGATIVE");
}




