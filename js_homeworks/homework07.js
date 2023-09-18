// Task01
console.log("--------------------TASK-01--------------------");

const hasUpperCase = (str) => {

    for(let i = 0; i <= str.length - 1; i++) {
        if(str[i].charCodeAt(i) > 65 && str[i].charCodeAt(i) < 90) return true;
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

    
    const strArr = str.trim().split("");

    const newArr = [];
    for(let i = 0; i <= strArr.length - 1; i++) {

        if("123456789".includes(strArr[i])) return true;
    }
    return false;
}

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));
//Task03

//Task04

//Task05

//Task06