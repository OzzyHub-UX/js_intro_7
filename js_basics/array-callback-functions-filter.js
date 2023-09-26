const numbers = [-5, 0, 5, 10, 23, -10];

// Find all the positive numbers -> [5, 10, 23]
const newArr1 = [];

// 1. using loops
for(const number of numbers) {
    if(number > 0) newArr1.push(number);
}

console.log(newArr1);

// 2. using forEach()
const newArr2 = [];
numbers.forEach((number) => number > 0 ? newArr2.push(number) : newArr2);

console.log(newArr2);

// 3. using filter()
const newArr3 = numbers.filter(number => number > 0);
console.log(newArr3);

// Find all the even numbers
// Find all the odd numbers

console.log(numbers.filter(number => number % 2 === 0));
console.log(numbers.filter(number => number % 2 !== 0));

// Replace all the negative numbers with 0 -> [0, 0, 5, 10, 23, 0];

console.log(numbers.map(x => (x < 0 ? 0 : x)));


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Find all the fruits that start with M
// Find all the fruits that has apple -> 
// Find all the fruits that has the length of 5 ->
// Find all the fruits that has length different than 5 ->
// Find all the fruits that has a or e
// Count how many fruits has i ->
// Count how many fruits ends with e -> 
// Store the first and last letters of the fruits as shown -> 

console.log(fruits.filter(fruit => fruit.toLowerCase().startsWith('m')));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple')));
console.log(fruits.filter(fruit => fruit.length === 5));
console.log(fruits.filter(fruit => fruit.length !== 5));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('a') || fruit.toLowerCase().includes('e')));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('i')).length);
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith('e')).length);
console.log(fruits.map(fruit => fruit[0] + fruit[fruit.length - 1]));
