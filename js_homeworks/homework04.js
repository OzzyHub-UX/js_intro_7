// Task01
console.log("\n-----------------------------\n");

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}


// Task02
console.log("\n-----------------------------\n");

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 2 === 0) console.log(i);
}


// Task03
console.log("\n-----------------------------\n");

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
}


// Task04
console.log("\n-----------------------------\n");

for (let i = 0; i <= 7; i++) {
    console.log(`The sqaure of ${i} = ${i * i}`);
}


// Task05
console.log("\n-----------------------------\n");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);


// Task06
console.log("\n-----------------------------\n");

let randomNum = Math.ceil(Math.random() * 10);

for (let i = randomNum; i > 1; i--) {
    randomNum *= (i - 1);
}

console.log(randomNum);


// Task07
console.log("\n-----------------------------\n");

let randomNumber1;
let attempts = 0;

while (randomNumber1 % 5 !== 0) {
    randomNumber1 = Math.ceil(Math.random() * 50);
    attempts++;
}

console.log(`The random number is ${randomNumber1} and it took ${attempts}
attempt/s to generate it.`);


// Task08
console.log("\n-----------------------------\n");

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());


// Task09
console.log("\n-----------------------------\n");

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
console.log(cartoonDogs.includes("Pluto"));


// Task10
console.log("\n-----------------------------\n");

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cartoonCats.sort());
console.log(cartoonCats.includes("Garfield") && cartoonCats.includes("Felix"));


// Task11
console.log("\n-----------------------------\n");

const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);

for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}


// Task12
console.log("\n-----------------------------\n");

const storeObjects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(storeObjects);

let counter1 = 0;
let counter2 = 0;

for (let i = 0; i <= storeObjects.length - 1; i++) {
    if (storeObjects[i].toLowerCase().startsWith('b') || storeObjects[i].toLowerCase().startsWith('p')) counter1++;
    if (storeObjects[i].toLowerCase().includes('book') || storeObjects[i].toLowerCase().includes('pen')) counter2++;
}

console.log(`Elements starting with B or P = ${counter1}`);
console.log(`Elements starting with book or pen = ${counter2}`);


// Task13
console.log("\n-----------------------------\n");

let numberArr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numberArr);

let is10 = 0, more10 = 0, less10 = 0;

for (let i = 0; i <= numberArr.length - 1; i++) {
    if (numberArr[i] === 10) is10++;
    else if (numberArr[i] > 10) more10++;
    else less10++;
}

console.log(`Elements that are more than 10 = ${more10}`);
console.log(`Elements that are less than 10 = ${less10}`);
console.log(`Elements that are 10 = ${is10}`);


// Task 14
console.log("\n-----------------------------\n");

let fArray = [5, 8, 13, 1, 2];
let sArray = [9, 3, 67, 1, 0];

console.log(`1st array is = [ ${fArray} ]`);
console.log(`2nd array is = [ ${sArray} ]`);

let tArray = [];

for (let i = 0; i <= fArray.length - 1; i++) {

    let element1 = fArray[i];
    let element2 = sArray[i];

    if (element1 > element2) tArray.push(element1);
    else tArray.push(element2);
}

console.log(`3rd array is = [ ${tArray} ]`);


// Task15
console.log("\n-----------------------------\n");

function firstDuplicate(array) {

    for (i = 0; i <= array.length - 1; i++) {
        for (j = i + 1; j <= array.length - 1; j++) {
            if (array[i] === array[j]) return array[i];
        }
    }
    return -1;
};

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));


// Task16
console.log("\n-----------------------------\n");

function getDuplicates(array) {

    const newArr = [];

    for (i = 0; i <= array.length - 1; i++) {
        let currentNums = array[i];
        let rest = array.slice(i + 1);
        if (rest.includes(currentNums)) newArr.push(currentNums);
    };
    return newArr;

};

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


// Task17
console.log("\n-----------------------------\n");


function reverseStringWords(str) {

    let newStr = str.trim().split(" ");

    for(let i = 0; i <= newStr.length - 1; i++) {
        newStr[i] = newStr[i].split("").reverse().join("");
    }

    return newStr.join(" ");
}

console.log(reverseStringWords("Hello World"));


// Task18
console.log("\n-----------------------------\n");

function getEvens(num1, num2){

    let newArr = [];
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2)

    for(i = start; i <= end; i++){
        if(i % 2 === 0) newArr.push(i);
    };

    return newArr;
};

console.log(getEvens(2,7));
console.log(getEvens(17,5));
console.log(getEvens(4,4));
console.log(getEvens(3,3));


// Task19
console.log("\n-----------------------------\n");

function getMultipleOf5(num1, num2) {

    let newArr = [];
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    for(i = start; i <= end; i++){
        if(i % 5 === 0) newArr.push(i);
    };

    return newArr;
};

console.log(getMultipleOf5(3,17));
console.log(getMultipleOf5(23,5));
console.log(getMultipleOf5(5,5));
console.log(getMultipleOf5(2,4));


// Task20
console.log("\n-----------------------------\n");

function fizzBuzz(num1, num2) {

    let newArr = [];

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    for(let i = start; i <= end; i++){
        if(i % 5 === 0 && i % 3 === 0) newArr.push('FizzBuzz');
        else if(i % 5 === 0) newArr.push('Buzz');
        else if(i % 3 === 0) newArr.push('Fizz');
        else newArr.push(i);
    };

    return newArr.join(" | ");
};

console.log(fizzBuzz(13,18));
console.log(fizzBuzz(12,5));
console.log(fizzBuzz(5,5));
console.log(fizzBuzz(9,6));
