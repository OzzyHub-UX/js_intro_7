
for (let i = 1; i < 10; i++) {
    console.log(i);
}


// while version of above
let num = 1;
let countE = 0;

while (num < 10) {
    if (num % 2 === 0) countE++;
    num++;
}

console.log(countE);

console.log("----------------------------------------------------------------");

// Playing the number guess game
let number = 5;

let randomNumber = Math.ceil(Math.random() * 10);

let attempts = 1;

while (number !== randomNumber) {
    console.log(randomNumber);
    randomNumber = Math.ceil(Math.random() * 10);
    attempts++;
}

console.log(`The random number is finally ${randomNumber} and it is the number we looking for 
It took ${attempts} time/s attempts to generate it!}`);


console.log("----------------------------------------------------------------\n");

let ranNum; // undefined

while(ranNum % 10 !== 0) {
    ranNum = Math.ceil(Math.random() * 50);
    console.log(ranNum);
}

console.log(`Above random number generator got the ${ranNum} finally!`);


console.log("----------------------------------------------------------------\n");



