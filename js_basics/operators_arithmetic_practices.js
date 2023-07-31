
// TASK-1

/* 
Create 2 variables and assign them numbers. 
Then, find the sum, subtraction, multiplication, division and remainder of these 2 numbers.
*/

let num1 = 6, num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);



// TASK-2

/*
Write a program that calculates and outputs the area and perimeter of a rectangle. 
Interview Question!
*/

let a = 5;
let b = 10;

let area = a * b;
let perimeter = 2 * (a + b); 

console.log("Area = " + area);
console.log("Perimeter = " + perimeter);


// TASK-3 

/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and 
weekly average amount that an SDET makes in the United States.
*/

let annualSalary = 120000
let monthsInYear = 12;
let weeksInYear = 52;

function customRound(number) {
    return Math.round(number * 100) / 100;
}


console.log("Monthly income = $" + customRound(annualSalary / monthsInYear));
console.log("Bi-weekly income = $" + customRound((annualSalary / weeksInYear) * 2));
console.log("Weekly income = $" + customRound(annualSalary / weeksInYear));








