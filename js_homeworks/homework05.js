//Task01
console.log("\n-------------------------------------\n");

// For Of Loop
function countPos(arr1){

    let countPos = 0;

    for(const number of arr1) {
        if(number > 0) countPos ++;
    };

    return countPos++;
};

console.log(countPos([-45,0,0,34,5,67]));
console.log(countPos([-23,-4,0,2,5,90,123]));
console.log(countPos([0,-1,-2,-3]));

console.log("\n|\n");

//For Loop
function countPos1(arr1) {

    let countPos1 = 0;

    for(let i = 0; i <= arr1.length - 1; i++){
        if(arr1[i] > 0) countPos1++;
    };

    return countPos1;
};

console.log(countPos1([-45,0,0,34,5,67]));
console.log(countPos1([-23,-4,0,2,5,90,123]));
console.log(countPos1([0,-1,-2,-3]));


console.log("\n|\n");


// Filter() Arrow Function

const arr1 = [-45,0,0,34,5,67];
const arr2 = [-23,-4,0,2,5,90,123];
const arr3 = [0,-1,-2,-3];

const posNum = arr1.filter(number => number > 0);
console.log(posNum.length); 

const posNum1 = arr2.filter(number => number > 0);
console.log(posNum1.length);

const posNum2 = arr3.filter(number => number > 0);
console.log(posNum2.length);



//Task02
console.log("\n-------------------------------------\n");

//For Of Loop
function countA(str){

    let countA = 0;

    for(const letter of str){
        if(letter.toLowerCase().includes('a')) countA++;
    };

    return countA;
};

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA Stands For Quality Assurance"));
console.log(countA("Cypress"));


console.log("\n|\n");


//For Loop
function countA1(str){

    let countA1 = 0;

    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].toLowerCase().includes('a')) countA1++;
    };

    return countA1;
};

console.log(countA1("TechGlobal is a QA bootcamp"));
console.log(countA1("QA Stands For Quality Assurance"));
console.log(countA1("Cypress"));


//Task03
console.log("\n-------------------------------------\n");

//For Of Loop
function countVowels(str){

    let countVowels = 0;

    for(const letter of str){
        if(letter.toLowerCase().includes('a') || 
        letter.toLowerCase().includes('e') || 
        letter.toLowerCase().includes('i') || 
        letter.toLowerCase().includes('o') || 
        letter.toLowerCase().includes('u')) countVowels++;
    };
    return countVowels++;
};

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

console.log("\n|\n");

//For Loop
function countVowels1(str){

    let countVowels1 = 0;

    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].toLowerCase().includes('a') || 
        str[i].toLowerCase().includes('e') || 
        str[i].toLowerCase().includes('i') || 
        str[i].toLowerCase().includes('o') || 
        str[i].toLowerCase().includes('u')) countVowels1++;
    };
    return countVowels1;
};

console.log(countVowels1("Hello"));
console.log(countVowels1("Hello World"));
console.log(countVowels1("JavaScript is fun"));
console.log(countVowels1(""));


//Task04
console.log("\n-------------------------------------\n");

//For Of Loop
function countConsonants(str){
    
    let countConsonants = 0;

    for(const letter of str){
        if(letter.toLowerCase() !== 'a' && 
        letter.toLowerCase() !== 'e' &&
        letter.toLowerCase() !== 'i' &&
        letter.toLowerCase() !== 'o' &&
        letter.toLowerCase() !== 'u') countConsonants++;
    };
    return countConsonants;
};

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

console.log("\n|\n");

//For Loop
function countConsonants1(str){
    
    let countConsonants1 = 0;

    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].toLowerCase() !== 'a' && 
        str[i].toLowerCase() !== 'e' && 
        str[i].toLowerCase() !== 'i' && 
        str[i].toLowerCase() !== 'o' && 
        str[i].toLowerCase() !== 'u') countConsonants1++;
    };
    return countConsonants1;
};

console.log(countConsonants1("Hello"));
console.log(countConsonants1("Hello Wolrd"));
console.log(countConsonants1("JavaScript is fun"));
console.log(countConsonants1(""));


//Task05
console.log("\n-------------------------------------\n");

//For Of Loop
function countWords(str){

    let countWords = 1;

    for(const word of str.trim()){
        if(word.includes(" ")) countWords++;
    };
    return countWords;
};

console.log(countWords("   JavaScript is fun   "));
console.log(countWords("Cypress is an UI automation tool.  "));
console.log(countWords("1 2 3 4"));


//Task06
console.log("\n-------------------------------------\n");

const factorial = (number) => {

    let factorial = 1;

    for(let i = 1; i <= number; i++){
        factorial *= i;
    };
    return factorial;
};

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(0));


//Task07
console.log("\n-------------------------------------\n");

const isPalindrome = (str) => {

    let newStr = str.trim().toLowerCase().split("").reverse().join("");
    let isPalindrome = false;

    if(newStr === str.toLowerCase()) isPalindrome = true;
    
    return isPalindrome;
}; 

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));


//Task08
console.log("\n-------------------------------------\n");

const countMultipleWords = (arr1) => {

    let count = 0;
    const newArr = arr1.filter(element => element.trim().includes(" ") ? count++ : count);
    return count;
};

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([]));


//Task09
console.log("\n-------------------------------------\n");

const count3OrLess = (str) => {

    if(!str){
        return 0;
    }

    else {
    let newArr = str.trim().split(" ");
    let count3Less = 0;
    const newArr1 = newArr.filter(element => element.length <= 3 ? count3Less++ : count3Less);
    
    return count3Less;
    };
};

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("Javascript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));


//Task10
console.log("\n-------------------------------------\n");

const isPrime = (number) => {

    if(number < 2) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) return false;
    }
    return true;
};

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


//Task11
console.log("\n-------------------------------------\n");
function add(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }

    return result;
};

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));


//Task12
console.log("\n-------------------------------------\n");
