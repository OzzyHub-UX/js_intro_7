// Task01
console.log("\n-----------------------------\n");

for(let i = 1; i <= 100; i++){
    if (i % 7 === 0) console.log(i);
}


// Task02
console.log("\n-----------------------------\n");

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 2 === 0) console.log(i);
}


// Task03
console.log("\n-----------------------------\n");

for(let i = 100; i >= 50; i--){
    if (i % 5 === 0) console.log(i);
}


// Task04
console.log("\n-----------------------------\n");

for(let i = 0; i <= 7; i++){
    console.log(`The sqaure of ${i} = ${i * i}`);
}


// Task05
console.log("\n-----------------------------\n");

let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i; 
}

console.log(sum);


// Task06
console.log("\n-----------------------------\n");

let randomNum = Math.ceil(Math.random() * 10);

for(let i = randomNum; i > 1; i--){
    randomNum *= (i - 1);
}

console.log(randomNum);


// Task07
console.log("\n-----------------------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
console.log(randomNum1);

let count = 0;

for(let i = randomNum1; i > 0; i--){
    if (i % 5 === 0) count++;
}

if (count === 1) console.log(`The random number is ${randomNum1} and it took ${count} attempt to generate it.`);
else console.log(`The random number is ${randomNum1} and it took ${count} attempts to generate it.`);


// Task08
console.log("\n-----------------------------\n");

let countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());


// Task09
console.log("\n-----------------------------\n");

let cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
console.log(cartoonDogs.includes("Pluto"));


// Task10
console.log("\n-----------------------------\n");

let cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cartoonCats.sort());
console.log(cartoonCats.includes("Garfield") && cartoonCats.includes("Felix"));


// Task11
console.log("\n-----------------------------\n");

let numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);

for(let i = 0; i <= numbers.length - 1; i++){
    console.log(numbers[i]);
}


// Task12
console.log("\n-----------------------------\n");

let storeObjects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(storeObjects);

let counter1 = 0;
let counter2 = 0;

for(let i = 0; i <= storeObjects.length - 1; i++){
    if(storeObjects[i].toLowerCase().startsWith('b') || storeObjects[i].toLowerCase().startsWith('p')) counter1++
    else if(storeObjects[i].toLowerCase().includes("book") || storeObjects[i].toLowerCase().includes("pen")) counter2++
}

console.log(`Elements starting with B or P = ${counter1}`);
console.log(`Elements starting with book or pen = ${counter2}`);
console.log();

/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2

*/
// Task13
console.log("\n-----------------------------\n");

let numberArr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numberArr);

for(let i = 0; i <= numberArr.length - 1; i++){
    if ()
}

