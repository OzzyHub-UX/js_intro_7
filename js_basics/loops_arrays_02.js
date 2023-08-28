
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


console.log("\n-----------------------------------------------------\n");

const numArray1 = [5, 8, 2, 1, 2];
const numArray2 = [9, 3, 5, 1, 0];

console.log(numArray1);
console.log(numArray2);

const newNumArray = [];

for(let i = 0; i <= numArray1.length - 1; i++){
    newNumArray.push(numArray1[i] * numArray2[i]);
}

console.log(newNumArray);


console.log("\n-----------------------------------------------------\n");

const nums = [1, 3, 0, 2, 6, 8];

for(let i = 0; i <= nums.length - 1; i++){
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
        break;
    }
}

for(const number of nums){
    if(number % 2 === 0) {
        console.log(number);
        break;
    }
}


console.log("\n-----------------------------------------------------\n");


let name = 'John';

let reversedName = '';

for(let i = name.length - 1; i >= 0; i--){
    reversedName += name[i];
}

console.log(reversedName); // nhoJ


