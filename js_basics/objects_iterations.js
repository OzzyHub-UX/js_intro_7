const car = {
    color : 'red',
    year  : 2023,
    make  : 'BMW',
    model : 'X7',
};

// All the keys ->
// All the values ->
// All the pairs ->

const allKeys = Object.keys(car);
console.log(allKeys); // [ 'color', 'year', 'make', 'model' ]

console.log(Array.isArray(allKeys)); // true

const allValues = Object.values(car);
console.log(allValues);

console.log("\n-------------------------------------\n");

for(const value in  Object.values(car)) {
    console.log(car);
}
