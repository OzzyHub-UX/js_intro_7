

function product3(num1, num2, num3){
    return num1 * num2 * num3;
}


// Testing your functions by invoking it with some examples
console.log(product3(1,2,3));
console.log(product3(5,6,10));
console.log(product3(-3,10,5));

// Tricky Part
console.log(product3("2", "5", "3"));
console.log(product3(null, "", false));
console.log(product3("   ", true, "10"));

function isOdd(number1){
     return number1 % 2 !== 0;
}

console.log(isOdd(-2)); // false
console.log(isOdd(5)); // true

function isEven(number1){
    return number1 % 2 === 0;
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true

// Tricky Part
console.log(isOdd("")); // false 
console.log(isEven("")); // true
console.log(isOdd("" * 5 + true)); // true
console.log(isEven("2" / 1 + 8)); // true