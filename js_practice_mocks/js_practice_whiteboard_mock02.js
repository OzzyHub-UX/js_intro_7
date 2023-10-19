console.log("\n----------------------------------\n");
/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument
and returns the given word back tripled if the string length is even or doubled if the string length
is odd when invoked.
Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/


const doubleOrTripleWord = (str) => {
    if (str.length % 2 === 0) return str + str + str
    else return str + str
}

console.log(doubleOrTripleWord("1"));


console.log("\n----------------------------------\n");


/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""
*/

const firstLastWord = (str) => {

    let newStr = str.trim().split(" ");

    if (newStr === "") return newStr
    else return newStr[0] + newStr[newStr.length - 1];

}



console.log(firstLastWord("Hello World")); // HelloWorld
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord(" "));


console.log("\n----------------------------------\n");

/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the
string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/

const hasVowel = (str) => {

    for (const letter of str) {
        if ('aeiou'.includes(letter.toLowerCase())) return true
    }

    return false
}

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));


console.log("\n----------------------------------\n");


/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns
true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false
*/

const startVowel = (str) => {
    let firstLetter = str.slice(0, 1).toLowerCase();

    if (firstLetter === 'a' || firstLetter === 'e'
        || firstLetter === 'i' || firstLetter === 'o'
        || firstLetter === 'u') return true;

    return false;
}
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));


console.log("\n----------------------------------\n");

/*
Write a function named averageOfEdges() which takes three number arguments and will
return average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15
*/

const averageOfEdges = (num1, num2, num3) => {

    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);

    return (maxNum + minNum) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));


console.log("\n----------------------------------\n");

/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/

const replaceFirstLast = (str) => {

    if (str.length < 2) return "";

    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}


console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast(" A "));


console.log("\n----------------------------------\n");

/*
Swap First and Last Four Characters
Write a function named as swap4() which takes a string word as an argument and returns the
string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal") -> "obalGlTech"
swap4("") -> ""
swap4(" ") -> ""
swap4("Apple") -> ""
*/

const swap4 = (str) => {

    return str.slice(str.length - 4) + str.slice(4, str.length - 4)  + str.slice(0, 4);
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("Apple"));

console.log("\n----------------------------------\n");


/*
Write a function named as swapFirstLastWord() which takes a string word as an argument
and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""
*/

const swapFirstLastWord = (str) => {

    let newStr = str.trim().split(" ")

    if(newStr.length < 2) return "";

    return `${newStr[newStr.length - 1]} ${newStr.slice(1, newStr.length - 1)} ${newStr[0]}`;
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));

console.log("\n----------------------------------\n");

/*
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and
returns how many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67]) -> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) -> 4
countPos([0, -1, -2, -3]) -> 0
*/

const countPos = (arr) => {
    return arr.filter(x => x > 0).length
}

console.log(countPos([-45, 0, 0, 34, 5, 67])); 

console.log("\n----------------------------------\n");


/*
Write a function named as getEvens() which takes 2 number arguments and returns all the
even numbers as an array stored from smallest even number to greatest even number when
invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are
no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/

const getEvens = (num1, num2) => {

    let maxNum = Math.max(num1, num2)
    let minNum = Math.min(num1, num2)
    let newArr = [];

    for(let i = minNum; i <= maxNum; i++) {
        if(i % 2 === 0) newArr.push(i)
    };

    return newArr;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));

console.log("\n----------------------------------\n");

/*
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the
numbers divisible by 5 as an array stored from first found match to last found match when
invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are
no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

const getMultipleOf5 = (num1, num2) => {

    let maxNum = Math.max(num1, num2)
    let minNum = Math.min(num1, num2)
    let newArr = [];

    for(let i = minNum; i <= maxNum; i++) {
        if(i % 5 === 0) newArr.push(i)
    };

    return newArr;
};

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));


console.log("\n----------------------------------\n");


/*
Write a function named countNeg() which takes an array of numbers as an argument and
returns how many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67]) -> 1
countNeg([-23, -4, 0, 2, 5, 90, 123]) -> 2
countNeg([0, -1, -2, -3]) -> 3
*/

const countNeg = (arr) => (arr.filter(x => x < 0).length);

console.log(countNeg([-45, 0, 0, 34, 5])); // 1


console.log("\n----------------------------------\n");


/*
Write a function named countA() which takes a string argument and returns how many A or a
there are in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") -> 4
countA("QA stands for Quality Assurance") -> 5
countA("Cypress") 
*/


const countA = (str) => {
   
    let count = 0;

    for(const letter of str) {
        if('a'.includes(letter.toLowerCase())) count++
    }

    return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("Cypress"));


console.log("\n----------------------------------\n");


/*
Write a function named countWords() which takes a string argument and returns the total
count of words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ") -> 3
countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4") -> 4
*/

const countWords = (str) => {

    let newStr = str.trim().split(" ");

    return newStr.length;
};

console.log(countWords("Javascript is fun"));


console.log("\n----------------------------------\n");


/*
Write a function named as factorial() which takes a number as an argument and returns the
factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/


const facotrial = (num1) => {

    let result = 1; 

    for(let i = num1; i > 0; i--) {
        result *= i;
    }

    return result;
}

console.log(facotrial(5));
console.log(facotrial(4));
console.log(facotrial(0));
console.log(facotrial(1));

console.log("\n----------------------------------\n");


/*
Write a function named as count3OrLess() which takes a string word as an argument and
returns the count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/

const count3OrLess = (str) => {

    let newStr = str.trim().split(" ");
    let count = 0;

    for(const element of newStr) {
        if(element.length <= 3) count++
    }

    return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));

console.log("\n----------------------------------\n");

/*
Write a function named as removeExtraSpaces() which takes a string word as an argument
and returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/

const removeExtraSpaces = (str) => {

    let newStr = str.trim().split(' ')
    let result = [];

    for(const element of newStr) {
        if(element != '') result.push(element)
    }

    return result.join(' ')
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("              Hello   World"));
console.log(removeExtraSpaces("JavaScript is        fun"));


console.log("\n----------------------------------\n");

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle
number.
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10
*/

const middleInt = (num1, num2, num3) => {

    const arr = [num1, num2, num3];
    arr.sort((a, b) => a - b);

    return arr[1];
};

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));

console.log("\n----------------------------------\n");


/*
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates
in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1
*/

function firstDuplicate(arr) {

    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i];
        } else {
            set.add(arr[i]);
        }
    }
    return -1;
}

console.log(firstDuplicate([7, 10, 3, 10]));
console.log(firstDuplicate(['foo', 'bar', 'a', 12, '12']));