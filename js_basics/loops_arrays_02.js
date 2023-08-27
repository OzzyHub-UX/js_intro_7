
const numbers = [3, 4, 7, 3, 2, 2, 7];

let sum = 0;

for(let i = 0; i <= numbers.length - 1; i++){
    sum += numbers[i];
}

console.log(sum / numbers.length);

console.log("\n-----------------------------------------------------\n");

sum = 0;

for(const number of numbers){
    sum += number;
}

console.log(sum / numbers.length);
