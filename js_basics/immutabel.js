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
employee2.title = ''


