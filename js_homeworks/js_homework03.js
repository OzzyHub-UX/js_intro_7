// Function for RandomNumbers
function getRandomNumber(start,end) {
    return Math.floor(Math.random() * (end - start  + 1) + start);
}


// Task-1
console.log("\n------------Task01------------\n");


let randomNum1 = getRandomNumber(0,100);
let randomNum2 = getRandomNumber(0,100);
let randomNum3 = getRandomNumber(0,100);
let avg3 = Math.round((randomNum1 + randomNum2 + randomNum3) / 3);

avg3 >= 50 ? console.log(true) : console.log(false);


// Task-2
console.log("\n------------Task02------------\n");

let randomNum4 = getRandomNumber(1,3);
let randomNum5 = getRandomNumber(1,3);
let randomNum6 = getRandomNumber(1,3);

if (randomNum4 === randomNum5 && randomNum4 === randomNum6 && randomNum5 === randomNum6) console.log("TRIPLE MATCH");
else if (randomNum4 === randomNum5 || randomNum4 === randomNum6 || randomNum5 === randomNum6 ) console.log("DOUBLE MATCH");
else console.log("NO MATCH");


// Task-3
console.log("\n------------Task03------------\n");

function hasA(str) {
    return str.toLowerCase().startsWith("a")
}

console.log(hasA("Apple"));


// Task-4
console.log("\n------------Task04------------\n");

function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) return str + str + str;
    else return str + str;
}

console.log(doubleOrTripleWord("22"));


// Task-5
console.log("\n------------Task05------------\n");

/*function firstWord(str){
    return str.slice(0,str.indexOf(" "));
}
*/

function firstWord(words) {
    let firstWord = words.split();
    if (words.length > 0) return firstWord[0];
    else return words;
}

console.log(firstWord("Hello"));

console.log("\n------------Task06------------\n");
console.log("\n------------Task07------------\n");
console.log("\n------------Task08------------\n");
console.log("\n------------Task09------------\n");
console.log("\n------------Task10------------\n");
console.log("\n------------Task11------------\n");
