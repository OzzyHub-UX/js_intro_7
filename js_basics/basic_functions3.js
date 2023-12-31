
function isPositive(num1){
    return num1 > 0;
}

console.log(isPositive(-3)); // false
console.log(isPositive(5)); // true


function isNegative(num1){
    return num1 < 0;
}

console.log(isNegative(5)); // false
console.log(isNegative(-5)); // true

function getFirstChar(string1){
    return string1[0];
}

function getLastChar(string1){
    return string1[string1.length - 1]
}

console.log(getFirstChar("Yazan"));
console.log(getLastChar("Yazan"));

function getFirstLastChar(str){
    return str[0] + str[str.length - 1];
}

console.log(getFirstLastChar("TechGlobal"));
console.log(getFirstLastChar(""));


function getRandomNumber(start, end){
       return Math.floor(Math.random() * (end - start + 1))  + start; 
}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(0, 1));
console.log(getRandomNumber(1, 8));

function average5(num1, num2, num3, num4, num5){
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log(average5(2, 2, 3, 4, 5));
console.log(average5(3, 7, 10, 5, 5));


// TRICKY PART
console.log(average5("1", "2", "3", "4", "5")); // 2469
console.log(average5("1", 2, 3, 4, 5)); // 2469
console.log(average5(1, 2, 3, 4, "5")); // 23
console.log(average5(1, 2, "3", 4, 5)); // 669



