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


// Task03

const nthCHars = (str, num) => {

        let result = "";
        for (let i = num - 1; i < str.length; i += num) {
            result += str[i];
        }
        return result;
    }

    console.log(nthCHars("Java", 2))




