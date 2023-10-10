const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5

const r1 = numbers.some(x => x % 5 === 0);
const r2 = numbers.find(x => x % 5 === 0) !== 'undefined';
const r3 = numbers.findIndex(x => x % 5 === 0) !==  -1;

console.log(r1);
console.log(r2);