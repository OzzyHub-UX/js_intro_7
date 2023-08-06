
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

let s3 = "JavaScript";
const middleIndex = s3.length / 2;

console.log(s3.slice(middleIndex - 1, middleIndex + 1));


// Task-5
console.log("\n---------Task-5---------\n");


