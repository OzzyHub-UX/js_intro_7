

// Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)
// Multiply number with 5 and print the result with below message.
console.log("\n---------Task-1---------\n");

let number = 5;
let randomNumber = Math.floor(Math.random() * 51);

console.log("The random number = " + randomNumber);
console.log("The random number * " + number + " = " + (Math.floor(Math.random() * 51) * 5));


// Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)
console.log("\n---------Task-2---------\n");

let randomNumber1 = (Math.floor(Math.random() * 10) + 1);
let randomNumber2 = (Math.floor(Math.random() * 10) + 1)

let minNumber = Math.min(randomNumber1, randomNumber2);
let maxNumber = Math.max(randomNumber1, randomNumber2);

console.log("Min number = " + minNumber);
console.log("Max number = " + maxNumber);
console.log("Difference = " + (maxNumber - minNumber));


// Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)
console.log("\n---------Task-3---------\n");

let randomNumber3 = Math.floor(Math.random() * 51) + 50;

console.log("The random number = " + randomNumber3);
console.log("The random number % 10 = " + (randomNumber3 % 10));


// Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
console.log("\n---------Task-4---------\n");

let randomNum1 = (Math.floor(Math.random() * 10) + 1) * 5;
let randomNum2 = (Math.floor(Math.random() * 10) + 1) * 4;
let randomNum3 = (Math.floor(Math.random() * 10) + 1) * 3;
let randomNum4 = (Math.floor(Math.random() * 10) + 1) * 2;
let randomNum5 = (Math.floor(Math.random() * 10) + 1);

console.log(randomNum1 + randomNum2 + randomNum3 + randomNum4 + randomNum5);

console.log((Math.floor(Math.random() * 10) + 1) * 5 + (Math.floor(Math.random() * 10) + 1) * 4 + (Math.floor(Math.random() * 10) + 1) * 3 + (Math.floor(Math.random() * 10) + 1) * 2 + (Math.floor(Math.random() * 10) + 1));


/* Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
*/
console.log("\n---------Task-5---------\n");

let randomNums1 = Math.floor(Math.random() * 25) + 1;
let randomNums2 = Math.floor(Math.random() * 25) + 26;
let randomNums3 = Math.floor(Math.random() * 25) + 51;
let randomNums4 = Math.floor(Math.random() * 25) + 76;

let max1 = Math.max(randomNums1, randomNums2, randomNums3, randomNums4);
let min1 = Math.min(randomNums1, randomNums2, randomNums3, randomNums4);

let max2 = Math.max(randomNums2, randomNums3)
let min2 = Math.min(randomNums2, randomNums3);

let diff1 = max1 - min1;
let diff2 = max2 - min2; 

let avg = (randomNums1, randomNums2, randomNums3, randomNums4) / 4;

console.log(max1 - min1);
console.log(max2 - min2);
console.log(avg);


console.log("Difference of max and min = " + Math.abs(Math.max(Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 25) + 26, Math.floor(Math.random() * 25) + 51, Math.floor(Math.random() * 25) + 76) + Math.min(Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 25) + 26, Math.floor(Math.random() * 25) + 51, Math.floor(Math.random() * 25) + 76)));
console.log("Difference of second and third = " + Math.abs(Math.max(Math.floor(Math.random() * 25) + 26, Math.floor(Math.random() * 25) + 51) + Math.min(Math.floor(Math.random() * 25) + 26, Math.floor(Math.random() * 25) + 51)));
console.log("Average of all = " + (Math.random() * 25) + 1 + Math.floor(Math.random() * 25) + 26 + Math.floor(Math.random() * 25) + 51 + Math.floor(Math.random() * 25) + 76) / 4;




//for(let i = 0; i < 100; i++){
    //console.log(Math.floor(Math.random() * 11) + 10);
//}

