const names = ['John', 'Jane', 'Alex', 'Max'];

//Output each name to the console
const printName = (name) => console.log(name);

names.forEach(printName);

console.log("\n");

//Output first letter of each name
const printFirstLetter = (name) => console.log(name[0]);

names.forEach(printFirstLetter);

console.log("\n");

//Output each name uppercased
const printNameUpperCase = (name) => console.log(name.toUpperCase());

names.forEach(printNameUpperCase);


