
// Extracting Substrings

let word = "JavaScript";

// slice() function

/*
vaS
Scr
ipt
aScri
*/

console.log(word.slice(2,5));
console.log(word.slice(4,7));
console.log(word.slice(7));
console.log(word.slice(3, 8));


// substring function
console.log(word.substring(2,5));
console.log(word.substring(4,7));
console.log(word.substring(7));
console.log(word.substring(3, 8));


// TRICKY PART
let car = "Tesla";
// console.log(car.slice(2, 15));
// console.log(car.substring(2, 15));

console.log(car.slice(-3, -1)); // sl
console.log(car.substring(-3, 2)); // Te

//split() function

let sentence = "JavaScript is the most used programming language";

console.log(sentence.split(" "));
console.log(sentence.split("most"));
console.log(sentence.split(""));