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
    if(str.length % 2 === 0) return str + str + str
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
   
   if(newStr === "") return newStr
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
    
    for(const letter of str) {
        if('aeiou'.includes(letter.toLowerCase())) return true
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
    let firstLetter = str.slice(0,1).toLowerCase();

    if(firstLetter === 'a' || firstLetter === 'e' 
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

const 


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
    return str.slice(4, str.length - 1) + str.slice(0,5);
}

console.log(swap4("abc"));
console.log(swap4("Javascript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("Apple"));



