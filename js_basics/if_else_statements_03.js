

let name = "bali";

if(name.toLowerCase()[0] === "j") console.log("PARTY");
else console.log("SORRY");


function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1))  + start; 
}

/*

*/

console.log("\n----------------------\n");

let ranNum = getRandomNumber(-3, 3);

console.log(ranNum);

/*
if (ranNum >= 0) {
    if (ranNum === 0) {
        console.log("EVEN\nZERO");
    }
    else if (ranNum % 2 === 0){
        console.log(("EVEN\nPOS"));
    }
    else {
        console.log("ODD\nPOS");
    }
}
else if (ranNum <= 0) {
    if (ranNum % 2 === 0) {
        console.log("EVEN\nNEG");
    }
    else {
        console.log("ODD\nNEG");
    }
}

*/
    
if (ranNum > 0) console.log("POS");
else console.log("NEG");

if (ranNum % 2 === 0) console.log("EVEN");
else if (!(ranNum % 2 === 0)) console.log("ODD");
else console.log("ZERO");


console.log("\n----------------------\n");

function checkDLAge(age) {
    return age > 15;
}

console.log(checkDLAge(10));
console.log(checkDLAge(15));
console.log(checkDLAge(16));
console.log(checkDLAge(25));


console.log("\n----------------------\n");

let age = 60;

let yearsLeft = 65 - age;

if (age >= 65) console.log("You can be retired!");
else if (age === 64) console.log(`You have ${yearsLeft} year left to get retired!`);
else console.log(`You have ${yearsLeft} years left to get retired!`);



