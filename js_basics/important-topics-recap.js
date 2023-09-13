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