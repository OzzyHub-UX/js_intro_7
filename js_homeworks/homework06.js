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

    for(let i = 0; i <= newStr.length - 1; i++){
        for(let j = 0; j <= vowels.length - 1; j++) {
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
console.log("\n============Task03============\n");


