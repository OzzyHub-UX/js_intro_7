const names = ['John', 'Jane', 'Alex', 'Max'];

//Output each name to the console
const printName = (name) => console.log(name);

names.forEach(printName);

console.log("\n");

//Output first letter of each name
const printFirstLetter = (name) => console.log(name[0]);

names.forEach(printFirstLetter);

console.log("\n");

//Output each name uppercased
const printNameUpperCase = (name) => console.log(name.toUpperCase());

names.forEach(printNameUpperCase);


// Count how many names has 4 letters


let count = 0;

names.forEach((name) => name.length === 4 ? count++ : count);

console.log(count);

//Above is not good, we will learn filter() or reduce could be used 


console.log("\n");

const numbers = [5, 10, 3, 0, -2];

numbers.forEach((number) => console.log(number));

numbers.forEach((number) => console.log(number * 5));

numbers.forEach((number) =>console.log(number % 2 === 0));


const numbersMultipliedBy3 = numbers.map((num) => num * 3);
console.log(numbersMultipliedBy3);