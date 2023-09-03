const numbers = [-5, 0, 5, 10, 23, -10];


const posNums = numbers.filter((x) => x > 0);

console.log(numbers.filter((x) => x > 0));

const evenNums = numbers.filter((x) => x % 2 === 0);
const oddNums = numbers.filter((x) => x % 2 !== 0);
const replaceNeg = numbers.map((x) => x < 0 ? 0 : x)

console.log(evenNums);
console.log(oddNums);
console.log(replaceNeg);

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

const startsWithM = fruits.filter((fruit) => fruit.startsWith("M"));
const hasApple = fruits.filter((fruit) => fruit.toLowerCase().includes("apple"));
const length5 = fruits.filter((fruit) => fruit.length === 5);
const lengthDif5 = fruits.filter((fruit) => fruit.length !== 5);
const inlcudesAOrE = fruits.filter((fruit) => fruit.toLowerCase().includes('a') || fruit.toLowerCase().includes('e'));

let counti = 0;
const countI = fruits.forEach((fruit) => fruit.toLowerCase().includes('i') ? counti++ : counti);

let countE = 0;
const countEndWithE = fruits.forEach((fruit) => fruit.toLowerCase().endsWith('e') ? countE++ : countE);

const firstAndLast = fruits.map((fruit) => fruit[0] + fruit[fruit.length-1]);

console.log(startsWithM);
console.log(hasApple);
console.log(length5);
console.log(lengthDif5);
console.log(inlcudesAOrE);
console.log(counti);
console.log(countE);
console.log(firstAndLast);