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

// Find all the even numbers -> 
// Find all the odd numbers -> 
// Replace all the negative numbers with 0 -> 

console.log(numbers.filter(number => number % 2 === 0));