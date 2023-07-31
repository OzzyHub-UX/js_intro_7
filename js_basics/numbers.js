
let num1 = 5, num2 = 10.5;

console.log(num1); // 5
console.log(num2); // 10.5 

console.log(num1 + num2); // 15.5
console.log(num1 * num2); // 52.5   
console.log(num1 - num2); // -5.5

let a = 2, b = 5, c = "10", d = "20";

console.log(a + b); // 7
console.log(c + d); // "1020"
console.log(d / a); // 10

// NaN -> Operator
console.log(NaN);
console.log(typeof NaN); // number

console.log("  " * 5); // 0
console.log("" * 5); // 0
console.log("hello" * 5); // NaN

console.log(0 / 0); // NaN
console.log(0 / 5); // 0 
console.log(5 / 0); // Infinity 

// Infinity & - Infinity 
console.log(Infinity); // Infinity 
console.log(-Infinity); // - Infinity
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

// isNaN() function
console.log(isNaN(5)); // false
console.log(isNaN("Hello")); // true

console.log(isNaN(true)); // false 
console.log(isNaN(true + 5)); // false







