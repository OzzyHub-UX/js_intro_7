const person = { 
    fName : 'John', 
    age : 25, 
    city : 'Chicago'
};

console.log(person); // { fName: 'John', age: 25, city: 'Chicago' }

// adding more properties
person.lName = 'Doe';
person['gender'] = 'Male';

console.log(person); // {fName: 'John', age: 25,city: 'Chicago',lName: 'Doe',gender: 'Male'}

let personAge = person.age;
console.log(personAge); // 25

// Accessing object properties
console.log(person.fName); // John
console.log(person['city']); // Chicago

// Updating values for the specified key
person.fName = 'Jane';
person['fName'] = 'Jane';

console.log(person.fName); // Jane
console.log(person.lName); // Smith

// deleting object properties
delete person.gender;
delete person.lName;
delete person['city'];

console.log(person); //{ fName: 'Jane', age: 25 }


const car = {
    color : 'red',
    year  : 2023,
    make  : 'BMW',
    model : 'X7',
};



car.color = 'black';
console.log(car.color);
console.log(car.year);
console.log(car.make);
console.log(car.model);

console.log("\n-----------------------------------\n");

for(let key in car) {
    console.log(key + ": " + person[key]);
}
