/*
Requirement:
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/

// Task01

const isLetter = (char) => {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

const isVowel = (char) => {
    const lowercaseChar = char.toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(lowercaseChar);
}

const countVC = (str) => {
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (let char of str) {
        if (isLetter(char)) {
            if (isVowel(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }
    return {
        vowels: vowelsCount,
        consonants: consonantsCount
    };
}

console.log(countVC('Hello'));
console.log(countVC('Programming'));
console.log(countVC('123AbC'));
console.log(countVC('123!@#xyz'));
console.log(countVC(''));




console.log("\n-----------------------------\n");
console.log("\n-----------------------------\n");
console.log("\n-----------------------------\n");
console.log("\n-----------------------------\n");
console.log("\n-----------------------------\n");