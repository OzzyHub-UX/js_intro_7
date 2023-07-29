let fname = "John"; // string
let age = 25; // number - integer
let address = "Chicago"; // string 

console.log("My name is " + fname); //John
console.log("Age is " + age); // Age is 25
console.log("The city is " + address); // The city is Chicago

//console.log(city); // RefrenceError: city is not defined

var lname; // declaration

console.log(lname); // undefined 

lname = "Doe"; // assignment

console.log(lname); // Doe

lname = "Morgan"; // re-assignemnt

console.log(lname); // Morgan 


// DIFFERENCES between let vs const
const street = "S River"; // not changing
console.log(street); // S River 

//street = "N River"; // re-assignment
console.log(street); // N River
