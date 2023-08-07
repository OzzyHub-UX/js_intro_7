// Task-1
console.log("\n------------Task-1------------\n");


let str1 = "5", str2 = "2";

console.log(`The sum of ${str1} and ${str2} = ${Number(str1) + Number(str2)}`);
console.log(`The product of ${str1} and ${str2} = ${str1 * str2}`);
console.log(`The division of ${str1} and ${str2} = ${str1 / str2}`);
console.log(`The subtraction of ${str1} and ${str2} = ${str1 - str2}`);
console.log(`The remiander of ${str1} and ${str2} = ${str1 % str2}`);
console.log(`The exponentitation of ${str1} and ${str2} = ${str1 ** str2}`);


// Task-2
console.log("\n------------Task-2------------\n");


let s1 = "200", s2 = "-50";

console.log(`The greatest value is = ${Math.max(Number(s1) , (Number)(s2))}`);
console.log(`The smallest value is = ${Math.min(Number(s1) , (Number)(s2))}`);
console.log(`The average is = ${(Number(s1) + Number(s2)) / 2}`);
console.log(`The absolute difference is = ${Math.abs(Number(s1) - (Number)(s2))}`);


// Task-3
console.log("\n------------Task-3------------\n");


let randNum1 = Math.ceil(Math.random() * 50)
let randNum2 = Math.ceil(Math.random() * 50)

console.log(`The absolute difference between numbers is = ${Math.abs(randNum1 - randNum2)}`);


// Task-4
console.log("\n------------Task-4------------\n");


let randNum3 = Math.ceil(Math.random() * 50);
let randNum4 = Math.ceil(Math.random() * 50);
let randNum5 = Math.ceil(Math.random() * 50);
let randNum6 = Math.ceil(Math.random() * 50);
let randNum7 = Math.ceil(Math.random() * 50);

console.log(`The max value = ${Math.max(randNum3, randNum4, randNum5, randNum6, randNum7)}`);
console.log(`The min value = ${Math.min(randNum3, randNum4, randNum5, randNum6, randNum7)}`);


// Task-5
console.log("\n------------Task-5------------\n");

let randNum8 = (Math.floor(Math.random() * 51) + 50); 
let randNum9 = (Math.floor(Math.random() * 51) + 50); 
let randNum10 = (Math.floor(Math.random() * 51) + 50); 

console.log(`The number 1 = ${randNum8}`);
console.log(`The number 2 = ${randNum9}`);
console.log(`The number 3 = ${randNum10}`);
console.log(`The sum of numbers is = ${randNum8 + randNum9 + randNum10}`);

// Task-6
console.log("\n------------Task-6------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);



// Task-7
console.log("\n------------Task-7------------\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name[name.length - 1]}`);
console.log(`The first 3 charcaters in the name are = ${name.slice(0,3)}`);
console.log(`The last 3 charcaters in the name are = ${name.slice(name.length - 3)}`);

