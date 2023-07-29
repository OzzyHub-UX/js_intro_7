
//STRINGS
let myName = "John"; 

console.log(myName); // John
console.log(typeof myName); // string 

let a = "", b = "123", c = "000-00-000"; 

console.log(typeof a, typeof b, typeof c); // string string string
console.log(typeof a); // string 
console.log(typeof b); // string
console.log(typeof c); // string 


//NUMBERS
let num1 = 0;
let num2 = 123;

let num3 = 10.234523746, num4 = -20, num5 = 10 + 15, num6 = num5 + num2;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);
console.log(typeof num5);
console.log(typeof num6);


// BOOLEAN
let b1 = true;
let b2 = false;

let b3 = 5 > 2;
let b4 = 5 == 5;

let b5 = 10 + 5 != 10;

console.log(b1); // true
console.log(b2); // false
console.log(b3); // true 
console.log(b4); // true 
console.log(b5); // true

console.log(typeof b1); // boolean
console.log(typeof b2); // boolean
console.log(typeof b3); // boolean
console.log(typeof b4); // boolean
console.log(typeof b5); // boolean


// UNDEFINED
let myVariable; 

console.log(myVariable); // undefined

let myVar2 = undefined;
console.log(myVar2); // undefined 

console.log(typeof "abc"); // string 
console.log (typeof undefined) // undefined
console.log (typeof "undefined") // string
console.log (typeof "123") // string


// null
let myVar3 = null;
console.log(myVar3); // null
console.log(typeof myVar3);// object

console.log(myVar3 , typeof myVar3); // commma is space 
console.log(myVar3 + typeof myVar3); // + operator is no space 



// BigInteger
let number1 = 90071992547409922n;
let number2 = BigInt("90071992547409922");

console.log(number1); // 90071992547409922
console.log(number2); 

console.log(typeof number1); // bigint
console.log(typeof number2); // bigint

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
