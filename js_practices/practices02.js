
// Task-1
console.log("\n---------Task-1---------\n");

/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.
"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript”
"I don't like books"                                -> "I like books"
*/

let text1 = "I like apples and oranges";
let text2 = "Java is not a scripting programming langauge";
let text3 = "I don't like books";

console.log(text1.slice(7,12).toUpperCase());
console.log(text2.slice(0 , 4) + text2[14].toUpperCase() + text2.slice(15, 21));
console.log(text3.replace("don't ", ""));


// Task-2
console.log("\n---------Task-2---------\n");

let s1 = "JavaScript"
let s2 = "";

function containsVowel(str) {
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        return true;
      }
    }
    return false;
  }


console.log(`The length is = ${s1.length}`);
console.log(`The first char is = ${s1[0]}`);
console.log(`The last char is = ${s1[s1.length-1]}`);

console.log(
s1.toLowerCase().includes("a") || s1.toLowerCase().includes("e") || 
s1.toLowerCase().includes("i") || s1.toLowerCase().includes("o") || 
s1.toLowerCase().includes("u"));

console.log(containsVowel(s1)); // Function 

console.log(`The length is = ${s2.length}`);
console.log(`The first char is = ${s2[0]}`);
console.log(`The last char is = ${s2[s2.length-1]}`);

console.log(
    s1.toLowerCase().includes("a") || s1.toLowerCase().includes("e") || 
    s1.toLowerCase().includes("i") || s1.toLowerCase().includes("o") || 
    s1.toLowerCase().includes("u"));

console.log(containsVowel(s2)); // Function


// Task-3
console.log("\n---------Task-3---------\n");

/*
Requirement:
Assume that you are given a String of any even length including empty.
Find the middle 2 characters for the given String.
*/

let string1 = "Yazan"

console.log(string1[Math.floor(string1.length / 2)]);


// Task-4
console.log("\n---------Task-4---------\n");

/*
Requirement:
Assume that you are given a String of any even length including empty.
Find the middle 2 characters for the given String.
Test Data 1:
let s3 = "";
Expected Result 1:
undefined
Test Data 2:
let s3 = "abcd";
Expected Result 2:
"bc"
Test Data 3:
let s3 = "JavaScript";
Expected Result 3:
"Sc"
*/

let s3 = "abcd";
const middleIndex = s3.length / 2;

console.log(s3.slice(middleIndex - 1, middleIndex + 1));


// Task-5
console.log("\n---------Task-5---------\n");

/*
Requirement:
Write a program that divides the given String. Assume the length of the String will at least
be 4.
-Find and print the first two characters
-Find and print the last two characters
-Find and print all the middle characters other than first and last 2 characters
Test Data 1:
let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are =
Test Data 2:
let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = "JavaScript";

console.log(`The first 2 charcters are = ${s4.slice(0,2)}`);
console.log(`The last 2 characters are = ${s4.slice(s4.length - 2)}`);
console.log(s4.slice(2,s4.length - 2));


// Task-6
console.log("\n---------Task-6---------\n");

/*

*/

let s5 = "Java";

console.log(s5.slice(0,2).includes(s5.slice(s5.length - 2))); 


// Task-7
console.log("\n---------Task-7---------\n");

let s61 = "123456";
let s62 = "Blue";

console.log(s61.slice(1, s61.length - 1) + s62.slice(1, s62.length - 1));


// Task-8
console.log("\n---------Task-8---------\n");

let s7 = "xbluexx";

console.log(s7.slice(0,2).startsWith("xx") && s7.slice(s7.length - 2).endsWith("xx"));

console.log(s7.slice(0,2).includes("xx") && s7.slice(s7.length - 2).includes("xx"));


// Task-9
console.log("\n---------Task-9---------\n");

let s8 = "JavaScript is nice to learn";

let firstWord = s8.slice(0, s8.indexOf(" "));
let lastWord = s8.slice(s8.lastIndexOf(" ") + 1);
let middle = s8.slice(s8.indexOf(" "), s8.lastIndexOf(" "));

console.log(lastWord + middle + firstWord);
let words = s8.split(" ");

[words[0] , words[words.length - 1]] = [words[words.length-1], words[0]];

console.log(words);


// Task-10
console.log("\n---------Task-10---------\n");

let counter = 0;

let s10 = "I like apple";

/*
PSEUDO CODE:

1. 
*/

console.log(s10.split(" "));
console.log(s10.split(" ").length);
console.log(s10.length - s10.replaceAll(" ", "").length + 1);

