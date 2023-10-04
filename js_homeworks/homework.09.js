// Task01
console.log("\n---------TASK01---------\n");

const fizzBuzz1 = (num) => {
    if (num % 15 === 0) console.log("FizzBuzz");
    else if (num % 3 === 0) console.log("Fizz");
    else if (num % 5 === 0) console.log("Buzz");
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

    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            newArr.push('FizzBuzz')
            continue;
        }
        if (i % 3 === 0) {
            newArr.push('Fizz')
            continue;
        }
        if (i % 5 === 0) {
            newArr.push('Buzz')
            continue;
        }
        else newArr.push(i)
    }
    return newArr;
};

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));


// Task03
console.log("\n---------TASK03---------\n");

const findSumNumbers = (str) => {
    const newArrWSpace = [];

    for (const char of str) {
        if ('0123456789'.includes(char)) newArrWSpace.push(Number(char))
        else newArrWSpace.push(' ')
    };

    const newArrWithoutSpace = newArrWSpace.join('').split(' ');
    let sum = 0;
    for (const element of newArrWithoutSpace) {
        sum += Number(element);
    }
    return sum;
};

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c 6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));


// Task04
console.log("\n---------TASK04---------\n");

const findBiggestNumber = (str) => {

    const newArr = [];

    for (const char of str) {
        if ('0123456789'.includes(char)) newArr.push(Number(char));
        else newArr.push(' ');
    };

    const newArr1 = newArr.join('').split(' ');
    const newArr2 = newArr1.filter((element) => element.length > 0);

    let max = 0;
    for (const element of newArr2) {
        if (Number(element) > max) max = element;
    }
    return max;
}

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c 6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));


// Task05
console.log("\n---------TASK05---------\n");

const countOccurrencesOfCharacters = (str) => {

    if(str === "") return "";

    const tempArr = str.split('');
    let letters = [];
    let count = 1;

    for(let i = 0; i <= tempArr.length - 1; i ++){
        if(tempArr[i] === tempArr[i + 1]) {
            count++;
        }
        else {
            let singles = `${count}${tempArr[i]}`;
            letters.push(singles);
            count = 1;
        }
    }

    return letters.join('');
}

console.log(countOccurrencesOfCharacters(""));
console.log(countOccurrencesOfCharacters("abc"));
console.log(countOccurrencesOfCharacters("abbcca"));
console.log(countOccurrencesOfCharacters("aaAAa"));
console.log(countOccurrencesOfCharacters("www"));


// Task06
console.log("\n---------TASK06---------\n");

const fibonacciSeries1 = (n) => {

    let fibonacciArr = [];
    let num1 = 0;
    let num2 = 1;
    let sum;

    for(let i = 0; i < n; i++) {
        sum = num1 + num2;
        num1 = num2
        fibonacciArr = [...fibonacciArr,num2];
        num2 = sum
    }
    return fibonacciArr;
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));


// Task07
console.log("\n---------TASK07---------\n");

const fibonacciSeries2 = (n) => {

        let num1 = 0;
        let num2 = 1;
        let result = 0;
        
        for (let i = 2; i <= n; i++) {
          result = num1 + num2;
          num1 = num2;
          num2 = result;
        }
        
        return result;
      };

      console.log(fibonacciSeries2(2));
      console.log(fibonacciSeries2(4));
      console.log(fibonacciSeries2(8));
      console.log(fibonacciSeries2(9));
      console.log(fibonacciSeries2(1));
    
// Couldnt Figure this one out on time, waiting for your solution :)


// Task08
console.log("\n---------TASK08---------\n");

const findUniques = (arr1, arr2) => {
    const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
    const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
    const unic = a.concat(b);
    const u = []
    for(const el of unic){
        if(!a.includes(el) || !b.includes(el)) u.push(el)
    }
    return console.log(u)

}
findUniques([], []);
findUniques([], [1, 2, 3, 2]);
findUniques([1, 2, 3, 4], [3, 4, 5, 5]);
findUniques([8, 9], [9, 8, 9]);
findUniques([-1, -2], [1, 2]);


// Task09
console.log("\n---------TASK09---------\n");

const isPowerOf3 = (number) => (Math.pow(number, 3) % 3 === 0);

console.log(isPowerOf3(15));

console.log();

// Couldnt Figure this one out on time, waiting for your solution :)
