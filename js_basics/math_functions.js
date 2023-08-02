
let num1 = 5, num2 = 10, num3 = 7, num4 = -5, num5 = -8;

// -8, -5, 5, 7, 10

// Finding the Max Number
let maxNumber = Math.max(num1, num2, num3, num4, num5);
console.log(maxNumber); // 10

// Finding the Min Number
let minNumber = Math.min(num1, num2, num3, num4, num5);
console.log(minNumber); // -8


// The abs method 
console.log(Math.abs(num4)); // 5
console.log(Math.abs(num5)); // 8

console.log(Math.abs(num1 - num2)); // 5
console.log(Math.abs(num1 * num5 - num4));
console.log(Math.abs(-Infinity));


// Rounding Numbers
console.log(Math.ceil(5.11)); // 6
console.log(Math.ceil(5.99)); // 6


// pow() function
console.log(2 ** 5); // 32
console.log(Math.pow(2, 5)); // 32
console.log(Math.pow(3, 2)); // 9
console.log(3 ** 2); // 9

// sqrt() function
console.log(Math.sqrt(64)); // 8

// random() function
console.log(Math.random()); // 0 to 0.99999999999...

// Find a random number between 1 and 10 (both included)
console.log(Math.ceil(Math.random() * 10));

console.log("-----------");

// Homework: Come up with a way to generate a random number between 10 and 20 (both included)
console.log(Math.floor(Math.random() * 11) + 10);

// Come up with a way to generate a random number between x and y (both included)
// Math.floor(Math.random() * (y - x + 1)) + x 




















