// Immutable 

let city1 = "Chicago";
//reassignment is possible
// city = "New York";
console.log(city);

// try to change the string variable
city1[0] = 'P';
console.log(city1); // Chicago

let num = 10;

num = num + 2;
console.log(num); // 12


// Objects
const city = {
    name: 'Chicago'
};

city.name = "New York";

console.log(city);
