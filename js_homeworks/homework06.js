//Task01
console.log("\n============Task01============\n");

const noSpace = (string) => {
    return string.replaceAll(" ", "");
};

console.log(noSpace(""));
console.log(noSpace("JavaScript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));


//Task02
console.log("\n============Task02============\n");

const replaceFirstLast = (str) => {
    if (str.trim().length < 2) return "";
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("   A   "));


//Task03
console.log("\n============Task03============\n");

const hasVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let newStr = str.toLowerCase();

    for(let i = 0; i <= newStr.length - 1; i++){
        for(let j = 0; j <= vowels.length - 1; j++) {
            if (newStr[i].includes(vowels[j])) return true;
        }
    };
    return false;
};

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));


//Task04
console.log("\n============Task04============\n");

/*
Write a function named checkAge() which takes a number argument to be considered as 
the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/

const checkAge = (num) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    


}


