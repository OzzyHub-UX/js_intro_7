
// Task-1
console.log("\n---------------------\n");

let number = 76;

if (number >= 1 && number <= 50) console.log(`${number} is in the 1st half`);
else console.log(`${number} is in the 2nd half`);

if (number >= 1 && number <= 25) console.log(`${number} is in the 1st quarter`);
else if (number >= 26 && number <= 50) console.log(`${number} is in the 2nd quarter`);
else if (number >= 51 && number <= 75) console.log(`${number} is in the 3rd quarter`);
else console.log(`${number} is in the 4th quarter`);


// Task-2
console.log("\n---------------------\n");

let num1 = 0;
let num2 = 1;

console.log(num1 === num2);

num1 === num2 ? console.log(true) : console.log(false);

if (num1 === num2) console.log(true);
else console.log(false);


// Task-3
console.log("\n---------------------\n");


let num3 = 2;
let num4 = 4;
let num5 = 7;

console.log(num3 % 2 === 0 && num4 % 2 === 0 && num5 % 2 === 0);

console.log(num3 % 2 === 0 && num4 % 2 === 0 && num5 % 2 === 0 ? true : false);


// Task-4
console.log("\n---------------------\n");


let var4 = 3;

if("0123456789".includes(var4)) console.log(`"${var4}" is a digit`);
else console.log(`"${var4}" is a letter`);


// Task-5
console.log("\n---------------------\n");

let var5 = "a";

if (var5.charCodeAt(0) >= 97 && var5.charAt(0) <= 122) console.log(`"${var5}" is a lowercase letter`);
else if (var5.charCodeAt(0) >= 65 && var5.charAt(0) <= 90) console.log(`"${var5}" is a uppercase letter`);
else console.log("INVALID INPUT");
