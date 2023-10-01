// Task01
console.log("\n---------TASK01---------\n");

const fizzBuzz1 = (num) => {
    if(num % 15 === 0) console.log("FizzBuzz");
    else if(num % 3 === 0) console.log("Fizz");
    else if(num % 5 === 0) console.log("Buzz");
    else console.log(num);
};

fizzBuzz1(0);
fizzBuzz1(1);
fizzBuzz1(3);
fizzBuzz1(5);
fizzBuzz1(30);
fizzBuzz1(10);
fizzBuzz1(15);
fizzBuzz1(-15);


// Task02
console.log("\n---------TASK02---------\n");

const fizzBuzz2 = (num) => {
    const newArr = [];

    for(let i = 0; i <= num; i++) {
        if(i % 15 === 0) newArr.push('FizzBuzz')
        if(i % 3 === 0) newArr.push('Fizz')
        if(i % 5 === 0) newArr.push('Buzz')
        else newArr.push(i)
    }
    return newArr;
};

fizzBuzz2(3);



