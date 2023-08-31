
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

    let newStr = array[0];

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length < newStr.length) newStr = array[i];
    }

    return newStr;
};

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));


function lastShortest1(array) {
    

}




