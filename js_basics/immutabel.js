// Immutable 

let city1 = "Chicago";
//reassignment is possible
// city = "New York";
console.log(city1);

// try to change the string variable
city1[0] = 'P';
console.log(city1); // Chicago

let num = 10;

num = num + 2;
console.log(num); // 12


// Objects
const city3 = {
    name: 'Chicago'
};

city3.name = "New York";

console.log(city3);

// Example on how to freeze an object 
const employee = {
    name: 'John',
    lNmae: 'Doe',
    title: 'HR'
}
// prevent from updateing above object
Object.freeze(employee);
employee.name = 'Joe';
console.log(employee);

const employee2 = employee;
employee2.title = '';

/*
Write a function that takes an array of numbers and a function as parameters. The function paremeter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array.

Ex: Input: [1,2,3] function(num){return num * 2*} Output: [2,4,6]

Input: [1,2,3] function(num){return num + 1} Output: [2,3,4]

Input: [1,2,3] function(num) {return num /2} Output: [.5, 1. 1.5]

Input: [1,2,3] function(num) {return num - 2} Output: [-1, 0, 1]
*/

const 
