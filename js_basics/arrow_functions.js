/*
Write a function called product which takes 2 numbers and returns their product

product(3, 5)   -> 15
product(2, 0)   -> 0
product(4, 3)   -> 12
*/

function product1(num1, num2){
    return num1 * num2;
};

console.log(product1(3, 5));
console.log(product1(2, 0));
console.log(product1(4, 3));


console.log("|\n|");

// Function expression syntax
const product2 = function (num1, num2) { return num1 * num2};

console.log(product2(3, 5));
console.log(product2(2, 0));
console.log(product2(4, 3));


console.log("|\n|");


// Arrow Function
const product3 = (num1, num2) => num1 * num2;

console.log(product3(3, 5));
console.log(product3(2, 0));
console.log(product3(4, 3));


console.log("|\n|");


const fizzBuzz = (number) => {
    if(number % 3 === 0 && number % 5 === 0) console.log('FizzBuzz');
    else if (number % 3 === 0) console.log('Fizz');
    else if (number % 5 === 0) console.log('Buzz');
    else console.log(number);
};

fizzBuzz(2);

const greeting = () => console.log("Hello");

greeting();