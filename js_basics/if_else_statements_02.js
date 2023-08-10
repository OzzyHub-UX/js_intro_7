
function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1))  + start; 
}


let randomNumber = getRandomNumber(0,6);

console.log(randomNumber);

randomNumber === 0 || randomNumber4 === 6 ? console.log("WEEKEND") : console.log("WEEKDAY");

if (randomNumber4 === 0 || randomNumber4 === 6) {
    console.log("WEEKEND");
}
else {
    console.log("WEEKDAY");
}