
/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
*/

for (let i = 1; i <= 30; i++){
    console.log(i);
}

console.log("------------------------------------------------------------------");

/*

*/

for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 ===0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

