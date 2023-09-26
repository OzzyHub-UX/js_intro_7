const names = ['John', 'Jane', 'Alex', 'Max'];

// Output each name to the console
//names.forEach(element => )

// Output first letter of each name
names.forEach((name) => console.log(name[0]));

// Output each name uppercased
names.forEach((name) => console.log(name.toUpperCase()));

// Count how many names has 4 letters  -> 3

let count = 0;

const has4 = (name) => name.length === 4;
names.forEach((name) => name.length === 4 ? count++ : count);

console.log(count); // 3

// Above is not good, we will learn filter() or reduce() could be used.

const numbers = [5, 10, 3, 0, -2];

// Print each number 
numbers.forEach((number) => console.log(number));

// Print each number multiplied by 5
numbers.forEach((number) => console.log(number * 5));

// Print true for even numbers or false for odd numbers.
numbers.forEach((number) => console.log(number % 2 === 0 ? true : false));