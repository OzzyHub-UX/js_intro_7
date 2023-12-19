/*
Write a function named toCamelCase() which takes a string as its 
argument and returns a new string in camelCase. Assume the string 
only contains letters and spaces
*/

// Task01

const toCamelCase = (str) => {

    let newStr = str.trim().toLowerCase().split(' ').filter(word => word !== '').join(' ')
    
    for(let i = 0; i < str.length; i++) {
        if(newStr[i] === ' ') {
            newStr = newStr.slice(0, i) + newStr[i + 1].toUpperCase() + newStr.slice(i + 2);
        }
    }
    return newStr;
}

console.log(toCamelCase("first name")) 	   
console.log(toCamelCase("last   name")) 	
console.log(toCamelCase("  ZIP CODE")) 	
console.log(toCamelCase("I Learn Java Script")) 	
console.log(toCamelCase("helloWorld")) 

console.log("\n--------------\n");

/*
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters and spaces
NOTE: In snake case words are separated by underscores (_) and are all lowercase.
Examples:
toSnakeCase("first name") 	->"first_name"
toSnakeCase("last    name") 	->"last_name"
toSnakeCase("    I love Java Script") 	->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")   		​-> "hello"
*/

// Task02

const toSnakeCase = (str) => {

    let newStr = str.trim().toLowerCase().split(' ').filter(word => word !== '').join('_');

    return newStr;
}

console.log(toSnakeCase("first name")) 	
console.log(toSnakeCase("last  name")) 	
console.log(toSnakeCase("  I love Java Script")) 
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))		

console.log("\n--------------\n");


/*
Write a function named alternatingCases() which takes a string
argument and returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and 
non-letter characters are ignored.
*/

// Task 03

const alternatingCases = (str) => str.split(' ').map(value => {
    return value.split('').map((value1, index) => index % 2 !== 0 ? value1.toLowerCase() : value1.toUpperCase()).join('')
}).join(' ')

console.log(alternatingCases("Hello"))  	// -> "HeLlO"
console.log(alternatingCases("basketball")) 	// -> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")) 	// -> "TeCh GlObAl"
console.log(alternatingCases("")) 		// ""
console.log(alternatingCases("123!@#aB")) 	 // -> "123!@#Ab"

console.log("\n--------------\n");


// Task 04

/*
Write a function named isNeutral() that takes two strings comprised 
of + and -, and return a new string which shows how the two strings interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, 
and are shown as the number 0.
Note: The two strings will be the same length.
*/

const isNeutral = (str1, str2) => {

    let result = '';

    for(let i = 0; i < str1.length; i++){

        let charOfStr1 = str1[i]
        let charOfStr2 = str2[i]

        if(charOfStr1 === '+' && charOfStr2 === '+') result += '+'
        else if (charOfStr1 === '-' && charOfStr2 === '-') result += '-'
        else result += '0'
    }

    return result;
}

console.log(isNeutral("-", "+"))		// ->  "0"
console.log(isNeutral("-+", "-+")) 		// ->   "-+"
console.log(isNeutral("-++-", "-+-+")) //	->  "-+00"
console.log(isNeutral("--++--", "++--++"))  // ->  "000000"
console.log(isNeutral("+++", "+++")) //  -> "+++"

console.log("\n--------------\n");

/*
Write a function named isTrueOrFalse() which takes a string with sets of 
character/words separated by space. Looking at the first letter of each 
word (case insensitive-"A" and "a" should be treated the same), you need 
to determine whether it falls into the positive/first half of the alphabet 
("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more 
(or equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit") 	-> true
isTrueOrFalse("Xylophones can obtain Xenon.")   		->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK") 	-> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe") 	-> true
isTrueOrFalse("Got stuck in the Traffic") 		-> false
*/

// Task05



