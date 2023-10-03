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
            let value = `${count}${tempArr[i]}`;
            letters = [...letters,value];
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