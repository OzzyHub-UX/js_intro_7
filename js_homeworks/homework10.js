
//Task01

const calculateTotalPrice1 = (fruits) => {
    const items = {
        apple: 2,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    let sum = 0;
    for (const product in fruits) {
        for (const price in items) {
            if (product === price) sum += fruits[product] * items[price]

        }
    }
    return sum
};
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }))
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }))
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }))
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }))

//Task02

//Task03



const nthWord = (string, number) => {
    let str = string.split(' ');
    if (str.length < number) return ''

    else return str[number - 1]
}

console.log(nthWord("I like programming languages", 2))
console.log(nthWord("QA stands for Quality Assurance", 4))
console.log(nthWord("Hello World", 3))
console.log(nthWord("Javascript", 1))
console.log(nthWord("", 1))


// Task04

const isArmstrong = (number) => {
    let numbers = number.toString().split('')
    let empty = [];
    for (const num of numbers) {
        empty.push(num ** numbers.length)
    }
    let numbs = empty.reduce((a, b) => a + b, 0)
    return numbs === number

}
console.log(isArmstrong(153))
console.log(isArmstrong(123))
console.log(isArmstrong(1634))
console.log(isArmstrong(153))
console.log(isArmstrong(1111))


// Task05

const reverseNumber = (...number) => {
    let num = number.join(',')
    let empty = ''
    for (let i = num.length - 1; i >= 0; i--) {
        empty += num[i]
    }
    return empty
}

console.log(reverseNumber(371))
console.log(reverseNumber(123))
console.log(reverseNumber(12))
console.log(reverseNumber(0))
console.log(reverseNumber(111))



// Task06


const doubleOrTriple = (numbers, boolean) => {
    if (boolean === true)
        return numbers.map(x => x * 2)
    else return numbers.map(x => x * 3)
}

console.log(doubleOrTriple([1, 5, 10], true))
console.log(doubleOrTriple([3, 7, 2], false))
console.log(doubleOrTriple([-1, -2], true))
console.log(doubleOrTriple([0], false))
console.log(doubleOrTriple([-1, 0, 1], true))


//Task07 

const splitString = (string, number) => {
    if (string.length % number !== 0) return ''
    else return string.slice(0, number) + ' ' + string.slice(number)
}

console.log(splitString("JavaScript", 5))
console.log(splitString("Java", 2))
console.log(splitString("Automation", 3))
console.log(splitString("Hello", 6))
console.log(splitString("12", 1))