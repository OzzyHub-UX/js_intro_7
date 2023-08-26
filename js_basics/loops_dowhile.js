
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

