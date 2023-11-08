// Task01

const countPalindrome = (str) => {

    if(str === '') return 0;
    const words = str.toLowerCase().split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].split("").reverse().join("")) {
            count++;
        }
    }
    return count;
}

console.log(countPalindrome('Mom and Dad'));
console.log(countPalindrome('See you at noon'));
console.log(countPalindrome('Kayak races attracts racecar drivers'));
console.log(countPalindrome(''));
console.log(countPalindrome('No palindrome here'));

console.log('-----------------------------------------')


// Task02

const sum = (arr, boolean1) => {

    let result = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if ((boolean1 && i % 2 === 0) || (!boolean1 && i % 2 !== 0)) {
            result += arr[i];
        }
    }
    return result;
}

console.log(sum([1, 5, 10], true))
console.log(sum([3, 7, 2, 5, 10], false))
console.log(sum([-1, 1, -2, 2], true))
console.log(sum([0, -1, 15, 1], false))
console.log(sum([1, 2, 3, 4, -4], true))

console.log('-----------------------------------------')

// Task03

const nthCHars = (str, num) => {

        let result = "";
        for (let i = num - 1; i < str.length; i += num) {
            result += str[i];
        }
        return result;
    }

    console.log(nthCHars("Java", 2))
    console.log(nthCHars("JavaScript", 5))
    console.log(nthCHars("Java", 3))
    console.log(nthCHars("Hi", 4))
    console.log(nthCHars("0123456789", 2))

    // Task04

    const canFormString = (str1, str2) => {
        let formattedStr1 = "";
        let formattedStr2 = "";
    
        for (let char of str1) {
            if (char !== " ") {
                formattedStr1 += char.toLowerCase();
            }
        }
    
        for (let char of str2) {
            if (char !== " ") {
                formattedStr2 += char.toLowerCase();
            }
        }
    
        if (formattedStr1.length !== formattedStr2.length) {
            return false;
        }
    
        const sortedStr1 = formattedStr1.split("").sort().join("");
        const sortedStr2 = formattedStr2.split("").sort().join("");
        return sortedStr1 === sortedStr2;
    }

    console.log(canFormString("Hello", 'Hi'));

    console.log('-----------------------------------------')


    //Task05

    const isAnagram = (str, str1) => {

    }

    console.log(isAnagram('Apple', 'Peach'))
    console.log(isAnagram('listen', 'silent'))


    console.log('-----------------------------------------')

    // Task06

   const count = (arr, isEven) => {

        let count = 0;
        for (let num of arr) {
            if (isEven && num % 2 === 0) {
                count++;
            } else if (!isEven && num % 2 !== 0) {
                count++;
            }
        }
        return count;
    }

    console.log(count([1, 5, 10], true))

    console.log('-----------------------------------------')

    // Task07

    const sumDigitsDouble = (str) => {
        let sum = 0;
        let hasDigits = false;
    
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(str[i]) && str[i] !== ' ') {
                sum += parseInt(str[i]);
                hasDigits = true;
            }
        }
    
        if (hasDigits) {
            return sum * 2;
        } else {
            return -1;
        }
    }

    console.log(sumDigitsDouble('Javascript'));


    // Task08

    const countOccurrence = (str, subStr) => {
        let count = 0;
        for (let i = 0; i <= str.length - subStr.length; i++) {
            let match = true;
            for (let j = 0; j < subStr.length; j++) {
                if (str[i + j] !== subStr[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                count++;
            }
        }
        return count;
    }

    console.log(countOccurrence('Javascript', 'Java'));