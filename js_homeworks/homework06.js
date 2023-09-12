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
    arr1.map((element) => {
        if (element.toLowerCase().includes('a')) {
            return '###'
        }
    else {
        return element
    }
})
};

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));





