// Task01

/*
Write a function named repeatingX() which takes a string argument and returns true if the 
letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
*/

const repeatingX = (str) => {
    let newStr = str.toLowerCase();

    for(let i = 0; i <= newStr.length; i++) {
        if(newStr[i] === 'x' && newStr[i + 1] === 'x') return true;
    };

    return false;
}

console.log(repeatingX("xTechxGlobalx")); 	
console.log(repeatingX("Hello Xx World")); 	
console.log(repeatingX("x x"));		
console.log(repeatingX(""));
console.log(repeatingX("xxxxx"));


// Task02

/*
Write a function named isPerfectSquare() which takes a number as an argument and checks 
if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the 
product of an integer by itself or as the second exponent of an integer. 
For example, 25 is a perfect square because it is the product of integer 5 
by itself, 5 × 5 = 25. However, 21 is not a perfect square number because it 
cannot be expressed as the product of two same integers.
*/

const isPerfectSquare = (num) => {
    if(num )
}

console.log(isPerfectSquare(25))
console.log(isPerfectSquare(24))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(-1)) 
console.log(isPerfectSquare(144))
