/*
Write a function named makeNegative() that takes a number and returns its negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. 
Negative zeros make no mathematical sense. So, zero will stay as zero.
*/

// Task 01

const makeNegative = (num) => num > 0 ? -num : num

console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));

console.log("\n--------------------\n");


// Task02

/*
Write a function isSumEvenOrOdd() which takes three 
numbers as arguments and determines if the sum of these 
numbers is odd or even.
*/

const isSumEvenOrOdd = (num1, num2, num3) => (num1 + num2 + num3) % 2 === 0 ? 'even' : 'odd'


console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));

console.log("\n--------------------\n");


// Task03

/*
Write a function named decimal2() which takes an array of 
numbers as an argument and => returns the array with the 
same numbers rounded up or down and represented with only two decimals.
*/

const decimal2 = (arr) =>{

    const roundedNumbers = [];
  
    for (const number of arr) {
      const roundedNumber = Number(number.toFixed(2));
        roundedNumbers.push(roundedNumber);
    }
  
    return roundedNumbers;

  }


  
  console.log(decimal2([94.356, 8.9752]));
  console.log(decimal2([76.62, 128.4, 84]));
  console.log(decimal2([20987, 3.53245, 12.345, 32.9]));
  console.log(decimal2([]));
  console.log(decimal2([4.35623, 8.9742]));
  

console.log("\n--------------------\n");

// Task04

/*
Write a function named myPow() which takes two numbers, x and n, as its arguments 
and returns x to the power of n without using Math.pow(). 3 to the power of 3 is 
3*3*3 = 27. NOTE: Any number to the power of 0 equals 1. Any number to the 
power of 1 equals the number itself.
*/ 

const myPow = (num1, num2) => {

    let result = num1;

    if (num2 === 0) {
      return 1;
    }
  
    for (let i = 1; i < Math.abs(num2); i++) {
      result *= num1;
    }
      if (num2 < 0) {
      result = 1 / result;
    }
    return result;
  }

  console.log(myPow(3, 3));
  console.log(myPow(10, 1));
  console.log(myPow(100, 0));
  console.log(myPow(1, 1));
  console.log(myPow(4, 2));
  console.log(myPow(0, 0));
  console.log(myPow(5, 3));

console.log("\n--------------------\n");

// Task05

/*
Write a function named findLongestWord() which takes a string as 
input and returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then 
return empty string. NOTE: If the string consists of multiple
words having the longest word, then return the first occurrence.
*/

const findLongestWord = (str) => {
    if (str.trim() === "") {
      return "";
    }

      const words = str.split(" ");
      let maxLength = 0;
      let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWord("This is a sample string for testing"));
  console.log(findLongestWord("One two ten"));
  console.log(findLongestWord(""));
  
console.log("\n--------------------\n");
