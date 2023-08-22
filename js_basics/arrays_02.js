
/*

*/

const names = ["Yuliia","Alex","Bali", "Igor", "Rame", "Aziz"];

console.log(names[3]);
console.log(names[names.length - 1].toUpperCase());


let randomNumber1 = Math.floor(Math.random() * 10) + 1;
let randomNumber2 = Math.floor(Math.random() * 10) + 1;
let randomNumber3 = Math.floor(Math.random() * 10) + 1;
let randomNumber4 = Math.floor(Math.random() * 10) + 1;
let randomNumber5 = Math.floor(Math.random() * 10) + 1;

const randNum = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];

console.log(randNum[0]);
console.log(randNum[randNum.length - 1]);

console.log((randNum[0] + randNum[randNum.length - 1]) / 2);

const arr = [];

console.log(arr.length); // 0

arr.push("Apple");
console.log(arr.length); // 1
console.log(arr); // [ 'Apple' ]

arr.push("Orange", "Kiwi", "Banana");

console.log(arr.length); // 4
console.log(arr); // [ 'Apple', 'Orange', 'Kiwi', 'Banana' ]