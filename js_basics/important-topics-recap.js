// Keyword "this"

function printName(name) {
    console.log(this); // window or object
    console.log(name);
};

printName('Ulan');

// Implicit Binding

const person = {
    name: 'Alan',
    age: 29,
    printName() {
        console.log(this.name); // value of this?
    },
    mother: {
        hobbies: ['running', 'baking'],
        name: 'Jane',
        printName() {
            console.log(this.name);
            console.log(this);
        }
    }
}

person.printName(); // Alan, this = person object
person.mother.printName(); // Jane, this = mother object 

// this (person) => this (window)

// Function is not inside the object 
const person1 = {
    name: 'Alan',
    age: 29,
};

function printName1() {
    console.log(this.name);
};

printName1.call(person1);

// Call with arguments
function printHobbies(h1, h2, h3) {
    console.log(`Hi. My name is ${this.name} and my hobbies are ${h1}, ${h2} and ${h3}`);
}

const hobbies = ['Reading', 'Coding', 'Fishing'];

printHobbies.call(person1, hobbies[0], hobbies[1], hobbies[2]);
printHobbies.call(person2, hobbies[0], hobbies[1], hobbies[2]);


// Apply 