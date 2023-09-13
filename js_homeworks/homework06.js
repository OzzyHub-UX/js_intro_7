//Task01
console.log("\n============Task01============\n");

const noSpace = (string) => {
    return string.replaceAll(" ", "");
};

console.log(noSpace(""));
console.log(noSpace("JavaScript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));


//Task02
console.log("\n============Task02============\n");

const replaceFirstLast = (str) => {
    if (str.trim().length < 2) return "";
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("   A   "));


//Task03
console.log("\n============Task03============\n");

const hasVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let newStr = str.toLowerCase();

    for (let i = 0; i <= newStr.length - 1; i++) {
        for (let j = 0; j <= vowels.length - 1; j++) {
            if (newStr[i].includes(vowels[j])) return true;
        }
    };
    return false;
};

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));


//Task04
console.log("\n============Task04============\n");

const checkAge = (num) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userAge = (currentYear - num);

    if (num > currentYear || userAge > 120) console.log("AGE IS NOT VALID");
    else if (userAge >= 16) console.log("AGE IS ALLOWED");
    else console.log("AGE IS NOT ALLOWED");
};

checkAge(2015);
checkAge(2007);
checkAge(2050);
checkAge(1920);
checkAge(1800);


//Task05
console.log("\n============Task05============\n");

const averageOfEdges = (num1, num2, num3) => {

    const maxNumber = Math.max(num1, num2, num3);
    const minNumber = Math.min(num1, num2, num3);

    return (maxNumber + minNumber) / 2;
};

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));


//Task06
console.log("\n============Task06============\n");

const noA = (arr1) => {
    return arr1.map((element) => {
        if (element.toLowerCase().startsWith('a')) {
            return '###';
        }
        else {
            return element;
        }
    })
};

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));


//Task07
console.log("\n============Task07============\n");

const no3and5 = (arr1) => {

    return arr1.map((element) => {
        if (element % 15 === 0) {
            return 101;
        }
        else if (element % 5 === 0) {
            return 99;
        }
        else if (element % 3 === 0) {
            return 100;
        }
        else {
            return element;
        }
    })
};

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));


//Task08
console.log("\n============Task08============\n");

const countPrimes = (arr) => {

    let countPrime = 0;
    arr.forEach(num => {
        if (num < 2) return countPrime;
        if (num === 2 || num === 3) return countPrime++;
        if (num % 2 === 0 || num % 3 === 0) return countPrime;

        let d = 5;

        while (d < num) {
            if (num % d === 0) return countPrime;
            d++;
        }
        return countPrime++;
    });

    return countPrime;
};

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));


//Task09
console.log("\n============Task09============\n");

const removeDuplicates = (arr) => {

    const newArr = [];

    arr.forEach((element) => {
        if (!newArr.includes(element))
            newArr.push(element);
    });
    return newArr;
};

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


//Task10
console.log("\n============Task10============\n");

const isDateFormatValid = (str) => {

    let newArr = (str.split("/"));
    let isValid = false;

    if (str.length < 10) {
        isValid = false;
    }
    else if (newArr.length === 3) {
        const year = parseInt(newArr[2]);
        if (parseInt(newArr[0]) <= 12 && parseInt(newArr[1]) <= 31 && year.toString().length === 4) {
            isValid = true;
        }
    }
    return isValid;
};

console.log(isDateFormatValid(""));
console.log(isDateFormatValid("15/30/2020"));
console.log(isDateFormatValid("10-30-2020"));
console.log(isDateFormatValid("10.30.2020"));
console.log(isDateFormatValid("5/30/2020"));
console.log(isDateFormatValid("05/30/2020"));
console.log(isDateFormatValid("10/2/2020"));
console.log(isDateFormatValid("10/02/2020"));


//Task11
console.log("\n============Task11============\n");

const secondMax = (arr) => {

    let largestNumber = arr[0];
    let secondLargestNumber = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        }
    }
    return secondLargestNumber;
};

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));
console.log(secondMax([10, 15, 20]));


//Task12
console.log("\n============Task12============\n");

const secondMin = (arr) => {

    if(arr.length === 1) return arr[0];

    let smallest = Infinity;
    let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
};

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));
console.log(secondMin([10, 15, 20, 25]));