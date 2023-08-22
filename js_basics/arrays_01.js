
let city1 = "Chicago";
let city2 = "Miami";
let city3 = "San Francisco";

console.log(city1);
console.log(city2);
console.log(city3);

// Array Version
const cities = ["Chicago", "Miami", "San Francisco"];
console.log(cities); // [ 'Chicago', 'Miami', 'San Francisco' ]

console.log(cities[1]); // Miami

// Update your value in the array with their indexes
cities[2] = "Berlin";

console.log(cities); // [[ 'Chicago', 'Miami', 'Berlin']
console.log(cities[2]);
console.log(cities[2].toUpperCase()); // BERLIN

const numbers = [5, 3, 2, 10];
console.log(numbers[-5]); // undefined
console.log(numbers[-1]); // undefined
console.log(numbers[-100]); // undefined
console.log(numbers[-4]); // undefined


console.log(typeof numbers); // object
console.log(typeof cities); // object

numbers[4] = 25;
console.log(numbers);

numbers[-1] = 100;
console.log(numbers);