// Task01
console.log("--------------------TASK-01--------------------");

const hasUpperCase = (str) => {

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i].charCodeAt(i) > 65 && str[i].charCodeAt(i) < 90) return true;
    }
    return false;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));


//Task02
console.log("--------------------TASK-02--------------------");

const noDigit = (str) => {

    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (isNaN(parseInt(char))) {
            result += char;
        }
    }

    return result;
}

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));


//Task03
console.log("--------------------TASK-03--------------------");

const noVowels = (str) => {

    const vowels = 'AEIOUaeiou'; // List of vowels
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (vowels.indexOf(char) === -1) {
            result += char;
        }
    }

    return result;
}

console.log(noVowels("TechGlobal"));
console.log(noVowels("AEOxyz"));
console.log(noVowels("Javascrip"));
console.log(noVowels(""));
console.log(noVowels("125$"));


//Task04
console.log("--------------------TASK-04--------------------");

function no13(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 13) {
        result.push(0); 
      } else {
        result.push(arr[i]); 
      }
    }
  
    return result;
  };
  
  console.log(no13([1, 2, 3, 4]));  
  console.log(no13([13, 2, 3]));  
  console.log(no13([13, 13, 13, 13, 13]));  
  console.log(no13([]));  
  
  
//Task05
console.log("--------------------TASK-05--------------------");

function middleInt(num1, num2, num3) {
    if ((num1 <= num2 && num2 <= num3) || (num3 <= num2 && num2 <= num1)) {
      return num2;
    } else if ((num2 <= num1 && num1 <= num3) || (num3 <= num1 && num1 <= num2)) {
      return num1;
    } else {
      return num3;
    }
  }

  console.log(middleInt(1, 2, 2));
  console.log(middleInt(5, 5, 8));
  console.log(middleInt(5, 3, 5));
  console.log(middleInt(1, 1, 1));
  console.log(middleInt(-1, 25, 10));


//Task06
console.log("--------------------TASK-06--------------------");

function sumOfDigits(str) {
    let sum = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (!isNaN(parseInt(char))) {
        sum += parseInt(char);
      }
    }
  
    return sum;
  }

  console.log(sumOfDigits("Javascript"));
  console.log(sumOfDigits("John's age is 29"));
  console.log(sumOfDigits("$125.0"));
  console.log(sumOfDigits(""));


  //Task07


  //Task08
