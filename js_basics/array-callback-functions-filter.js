const numbers = [-5, 0, 5, 10, 23, -10];


const posNums = numbers.filter((x) => x > 0);

console.log(numbers.filter((x) => x > 0));

const evenNums = numbers.filter((x) => x % 2 === 0);
const oddNums = numbers.filter((x) => x % 2 !== 0);
const replaceNeg = numbers.map((x) => x < 0 ? 0 : x)

console.log(evenNums);
console.log(oddNums);
console.log(replace0);