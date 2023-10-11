const numbers = [ 5, 10, 100];

// max 

let max = -Infinity;

for(const number of numbers) {
    max = Math.max(max, number)
}

console.log(max); // 100


console.log(numbers.reduce((max, number) => Math.max(max, number), 'NOT FOUND'));