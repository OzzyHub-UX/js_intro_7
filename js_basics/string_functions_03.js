
// Trimming strings

let city = "   Chicago   ";

console.log(city.length); // 13
console.log(city); 

console.log(city.trim()); // "Chicago"
console.log(city.trim().length); // 7

console.log(city.trimStart()); // "Chicago   "
console.log(city.trimStart().length); // 10

console.log(city.trimEnd()); // "   Chciago"
console.log(city.trimEnd().length); // 10


// TRICKY PART
let sentence = "I   like               Chicago    ";
console.log(sentence.trimStart()); // "I like         Chicago  "
console.log(sentence.trimEnd()); // "   I like           Chciago"
console.log(sentence.trim()); // "I like            Chciago"


// Padding padStart() vs padEnd()
let number1 = "123"
let number2 = "43756384756"

console.log(number1.padStart(11, " "));
console.log(number2);

// Hello   -> --Hello--

let word = "Hello";

console.log(word.padStart(word.length + 2, "-").padEnd(word.length + 4,"-"));
console.log(word.padStart(7, "-").padEnd(9, "-"));


// Concatenation
let str1 = "Hello", str2 = "World";

console.log(str1 + " " + str2); // "Hello World"
console.log(`${str1} ${str2}`); // "Hello World"

console.log(str1.concat(" ").concat(str2)); // "Hello World"
