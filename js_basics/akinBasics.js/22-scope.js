// Global Scope
var city = 'Chicago';
var state = 'IL';
let country = 'US';


console.log(city);
console.log(state);
console.log(country);

if(true) {
    console.log(city, state, country);
}

let str = 'civic';
let strReversed = '';

for(let i  = str.length - 1; i >= 0; i--) {
    strReversed += str[i];
}

if(str === strReversed) console.log('PALINDROME'); 
else console.log('NOT PALINDROME');


// Function Scope

function sum(arr) {
    let total = 0;
    for(const number of arr) {
        total += number;
    }
    return total;
}

// console.log(total); // ReferenceError: total is not defined - this behavior is same for var, let or const
console.log(sum([1, 2, 3])); // 6


// Block Scope

{
    var num1 = 1;
    let num2 = 2;
    const num3 = 3;
      
    console.log(num1);
    console.log(num2)
    console.log(num3);
}

console.log(num1); // 1
// console.log(num2); // ReferenceError: num2 is not defined
// console.log(num3); // ReferenceError: num3 is not defined



// Lexical Scope: nest functions

function outer() {
    let outerVariable = 'OUTER';

    function inner() {
        let innVariable = 'INNER';
        console.log(innVariable, outerVariable); // Access to both is valid
    }
    console.log(outerVariable); // OUTER
    // console.log(innerVariable); // ReferenceError: innerVaribale is not deifned 

    inner(); // INNER OUTER
}

outer(); 
