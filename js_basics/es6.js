// CONTINUE ES6
// Enhanced Object Literals

//values coming from somewhere
const year = 2023;
const type = 'horror';

// before ES6
const movie = {
    year: year,
    type: type
};

// after es6 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const resultArr = [...arr1, ...arr2];
console.log(resultArr);