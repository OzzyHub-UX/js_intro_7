
console.log("---------Task01---------");

function hasLowerCase(string) {
    let str = string.trim()
    for (const word of str) {
        if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122) return true
    }
    return false
}

console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase(" a "));
console.log(hasLowerCase(""));
console.log(hasLowerCase("125$"));


console.log("---------Task02---------");

const noZero = (array) => array.filter(x => x !== 0);


console.log(noZero([0, 1, 10]));
console.log(noZero([1]));
console.log(noZero([1, 10]));
console.log(noZero([0, 0, 0]));


console.log("---------Task03---------");

const numberAndSquare = (array) => array.map(x =>[x, x * x]);

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 1, -10]));


console.log("---------Task04---------");

function containsValue(array, str) {
    return array.includes(str)
}


console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc") );
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") );


console.log("---------Task05---------");

function reverseSentence(string) {
    const words = string.split(' ');
    if(words.length <= 1) return 'There is not enough words!'
    let firstUpperCase = words.reverse().join(' ')
    return firstUpperCase[0].toUpperCase() + firstUpperCase.slice(1).toLowerCase();
}

console.log(reverseSentence('Hello'));
console.log(reverseSentence('Javascript is fun'));
console.log(reverseSentence("This is a sentence"));


console.log("---------Task06---------");

function removeStringSpecialsDigits(str) {
    let word = '';
    for (const char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char === ' '));
        word += char
        
    }
    return word;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));


console.log("---------Task07---------");

const removeArraySpecialsDigits = (str) => str.map(str => {
    let word = '';
    for (const char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char === ' '))
        word += char
        
    }
    return word;
})

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits["Automation", "123#$%tool"]);


console.log("---------Task08---------");

function getCommons(arr1, arr2) {
    let arr3 = [];
    for (const word of arr1) {
        if(arr2.includes(word) && !(arr3.includes(word))) arr3.push(word);
    }
    return arr3;
}
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ));
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ));


console.log("---------Task09---------");

const noXInVariables = arr => {
    return arr.map(word => {
      if (typeof word === 'string') {
        return word.split('').filter(letter => letter.toUpperCase() !== 'X').join('');
      }
      return word;
    }).filter(word => word.length > 0);
  };
  
  console.log(noXInVariables(['abc', 123, '#$%']));
  console.log(noXInVariables(['xyz', 123, '#$%']));
  console.log(noXInVariables(['x', 123, '#$%']));
  console.log(noXInVariables(['xyXyxy', 'Xx', 'ABC']));