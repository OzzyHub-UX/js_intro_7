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

console.log("|\n|");

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

console.log("|\n|");

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

console.log("|\n|");

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

// Why in the for loop it returns the length


//Task04
console.log("\n-------------------------------------\n");

function countConsonants0(str) {

    let countConsonants0 = 0;
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];


    for(const letter of str){
        for(const vowel of vowelsArr){
            if(!(letter.includes(vowel))) countConsonants0++;
        }
    };
    return countConsonants0;
};

console.log(countConsonants0("Hello"));
console.log(countConsonants0("Hello World"));
console.log(countConsonants0("JavaScript is fun"));
console.log(countConsonants0(""));

console.log("|\n|");




function countConsonants(str){
    
    let countConsonants = 0;

    for(const letter of str){
        if(letter.toLowerCase() !== 'a' || 
        letter.toLowerCase() !== 'e' || 
        letter.toLowerCase() !== 'i' || 
        letter.toLowerCase() !== 'o' || 
        letter.toLowerCase() !== 'u') countConsonants++;
    };
    return countConsonants;
};

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

console.log("|\n|");

//For Loop
function countConsonants1(str){
    
    let countConsonants1 = 0;

    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].toLowerCase() !== 'a' || str[i].toLowerCase() !== 'e' || str[i].toLowerCase() !== 'i' || str[i].toLowerCase() !== 'o' || str[i].toLowerCase() !== 'u') countConsonants1++;
    };
    return countConsonants1;
};

console.log(countConsonants1("Hello"));
console.log(countConsonants1("Hello World"));
console.log(countConsonants1("JavaScript is Fun"));
console.log(countConsonants1(""));




