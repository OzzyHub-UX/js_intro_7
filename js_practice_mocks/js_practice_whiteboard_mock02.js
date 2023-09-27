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
    if(str.length % 2 === 0) console.log(str + str + str);
    else console.log(str + str);
}

doubleOrTripleWord("Tech");
doubleOrTripleWord("Apple");
doubleOrTripleWord("");
doubleOrTripleWord(" ");
doubleOrTripleWord("1");
doubleOrTripleWord("22");


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

    if(newStr === "") return newStr;
    else return newStr[0] + newStr[newStr.length - 1];
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord(" "));


console.log("\n----------------------------------\n");

/*

*/