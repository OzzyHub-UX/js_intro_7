// Basic Primitive Types in JavaScript 

/*
1. Number
2. String
3. Boolean 
4. Null
5. Undefined
Technically 2 others as well such as Symbol & BigInt
*/


//---------------------------------------------------------------------------------------------------//


// Numbers in JavaScript 

/*
There is only one number type!
    Stores Postive, Negative, Whole Numbers (Integers), and Decimals (Floating Point Numbers)
*/

console.log(20);
console.log(-15);
console.log(4.4874292);


//---------------------------------------------------------------------------------------------------//


// Simple Operators in JavaScript 

// Addition
console.log(30 + 5);
// Subtraction
console.log(45 - 5);
// Multiplication
console.log(5 * 5);
// Division
console.log(50 / 10);
// Modulo 
console.log(27 % 2);
// Exponents
console.log(2 ** 4);


//---------------------------------------------------------------------------------------------------//

// Strings and Indexing 

let color = "purple";

console.log(color[0]);
console.log(color[4]);
console.log(color[3]);
console.log(color[6]);

// String Methods

// UpperCase and LowerCase  -- converts a string to either Upper Case or Lowercase
let msg = "I am a student at life."; 

let yell = msg.toUpperCase();
let whisper = msg.toLowerCase();

console.log(msg.toUpperCase());

console.log(yell);
console.log(whisper);

// trim -- deletes white space before/after message NOT in between words.

let message = "     hi my name is      ";

console.log(message.trim());

// indexOf 

let favTVShow = "Amazing World Of Gumball"

console.log(favTVShow.indexOf("Amazing"));

// slice

let str = "supercalifragilisticexpialidocious";

console.log(str.slice(0,5)); // super
console.log(str.slice(5)); // califragilisticexpialidocious


