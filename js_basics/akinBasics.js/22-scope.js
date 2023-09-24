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

console.log(total); // ReferenceError: total is not defined