
function firstPos(array) {


    for (const number of array) {
        if (number > 0) return number;
    }
};

console.log(firstPos([1, 3, -9, 5, 8]));


console.log("\n---------------------------------------\n");


function lastNeg(array) {

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < 0) return array[i];
    }
};

console.log(lastNeg([-2, 3, 9, 5, 8]));

function lastNeg1(array) {

    for (const number of array.reverse()) {
        if (number < 0) return number;
    }
}

console.log(lastNeg1([-2, 3, 9, 5, 8]));


console.log("\n---------------------------------------\n");


function firstLongest(array) {

    let newStr = "";

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i].length > newStr.length) newStr = array[i];
    }
    return newStr;
};

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Mango"]));
console.log(firstLongest(["purple", "yellow", "brown"]));


console.log("\n---------------------------------------\n");


function lastShortest(array) {
    let newStr = array[array.length - 1];
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length < newStr.length) newStr = array[i];
    }
    return newStr;
};

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));


function lastShortest1(array) {

    let newStr = array[0];

    for(const str of array) {
        if(str.length <= newStr.length) newStr = str;
    };

    return newStr;
};

console.log(lastShortest1(["red", "blue", "yellow", "white"]));
console.log(lastShortest1(["Apple", "Banana", "Mango"]));
console.log(lastShortest1(["white", "yellow", "brown"]));


console.log("\n---------------------------------------\n");

function max(array) {

    let greatestNum = -Infinity;

    for(const number of array) {
        if(number > greatestNum) greatestNum = number;
    };
    return greatestNum;
};

console.log(max([0, 3, -9,  5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));
console.log(max([-5,-2]));


console.log("\n---------------------------------------\n");


function min(array) {
    if(array.length === 0) return "Array is empty";

    let min = Infinity;

    for(const number of array) {
        if (number < min) min = number;
    };
    return min;
};

console.log(min([0, 3,  5, 8]));
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([1, 2, 3, 15]));
console.log(min([]));


console.log("\n---------------------------------------\n");


function commonElements(arr1, arr2) {

    const newArr = [];

    for (const number of arr1){
        if(arr2.includes(number)) newArr.push(number)
    };
    return newArr;
};

console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));




