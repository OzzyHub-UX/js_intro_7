
function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1))  + start; 
}


let randomNumber = getRandomNumber(0,6);

console.log(randomNumber);

randomNumber === 0 || randomNumber === 6 ? console.log("WEEKEND") : console.log("WEEKDAY");

if (randomNumber === 0 || randomNumber === 6) {
    console.log("WEEKEND");
}
else {
    console.log("WEEKDAY");
}


console.log("\n-------------------\n");


let point = 1;

let randomNumber1 = getRandomNumber(1, 100);

console.log(randomNumber1);

if(randomNumber1 % 10 === 0 && randomNumber1 % 2 === 0) {
    console.log(point * 6);
}
else if(randomNumber1 % 2 === 0) {
    console.log(point * 2);
}
else if(randomNumber1 === 7) {
    console.log(point * 7);
}
else {
    console.log(point);
}


console.log("\n-------------------\n");

let randomNum1 = getRandomNumber(0,6);

console.log(randomNum1);

if (randomNum1 === 0 || randomNum1 === 6) {
    if (randomNum1 === 0) {
        console.log("RED\nVACATION");
    }
    else {
        console.log("GREEN\nVACATION");
    }
}
else {
    console.log("BLACK\nWORK");
}




