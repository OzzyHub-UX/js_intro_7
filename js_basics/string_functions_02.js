// String - Searching
let text = "Can I can a can";

// search

let result1 = text.search("can");
let result2 = text.search("Can");

console.log(result1); // 6
console.log(result2); // 0


// Tricky part
console.log(text.search("")); // 0
console.log(text.search(" ")); // 3
console.log(text.search("  ")); // -1
console.log(text.search("Hello")); // -1

console.log(text.search(text)); // 0
console.log(text.search("Can I can")) // 0

console.log(text.search("n c")); // -1
console.log(text.search("n a")); // 8

console.log(text.search("Can I can two cans")); // -1


// includes() function
let quote = "I can do it";

let r1 = quote.includes("can");
let r2 = quote.includes("it"); 
let r3 = quote.includes("IT");

console.log(r1); // true
console.log(r2); // true
console.log(r3); // false

// Tricky part
console.log(quote.includes(quote)); // true
console.log(quote.includes("")); // true
console.log(quote.includes(" ")); // true
console.log(quote.includes("  ")); // false



// indexOf() vs lastIndexOf()
let greeting = "GOOD MORNING";
console.log(greeting.indexOf("G")); // 0
console.log(greeting.lastIndexOf("G")); // 11


console.log(greeting.lastIndexOf("GOOD")); // 0
console.log(greeting.lastIndexOf("GOOD")); // 0
console.log(greeting.lastIndexOf("GOOD MORNING")); // 0
console.log(greeting.lastIndexOf("GOOD MORNING")); // 0

let sentence = "I like apple and pineapple";

console.log(sentence.indexOf("apple")); // 7
console.log(sentence.lastIndexOf("apple")); // 21

// Tricky Part
console.log(sentence.indexOf("abc")); 
console.log(sentence.lastIndexOf("abc")); 

console.log(sentence.indexOf(" ")); // 1
console.log(sentence.lastIndexOf(" ")); // 16

console.log(sentence.lastIndexOf("")); // 0
console.log(sentence.lastIndexOf("")); // 26



// startsWith() vs endsWith()
let info = "My phone is 312-000-0000";

let b1 = info.startsWith("M");
let b2 = info.startsWith("My");
let b3 = info.startsWith("0000");

console.log(b1); // true
console.log(b2); // true
console.log(b3); // true

console.log(info.startsWith("phone")); // phone

