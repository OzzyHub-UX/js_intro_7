const person = {
    name: 'Yuliia',
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
};
console.log(person);

function createPerson(name) {
    let obj = {};
    obj.name = name,
    obj.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
    console.log(obj);
    return obj;
};

const yulia = createPerson('Yuliia');
const alex = createPerson('Alex');
const joe = createPerson('Joe');

yulia.greet();


// Prototypical Chain

// Create a new date object
const date = new Date('December 17, 1995 03:24:00');
console.log(date);
console.log(typeof date); // object

// These methods coming from Date
const fullYear = date.getFullYear();
console.log(fullYear);
console.log(typeof fullYear);

// These methods coming from object 
console.log(date.toString());
console.log(typeof date.toString());

// date ->  Date -> Object -> null


// Constructor function
const cat = function(name, breed) {
    this.name = name;
    this.breed = breed;
}

cat.prototype.getDetails = function() {
    console.log(`${this.name} is a ${this.breed}`);
};



// Class

class Animal2 {
    constructor(name, breed) {
        // header
        this.name = name;
        this.breed = breed;
    }
    // class body
    getDetails() {
        console.log((`${this.name} is a ${this.breed}`));
    }

}

const animal = new Animal2('Zebra', 'White');
console.log(animal);
animal.getDetails();

class cat2 {
    constructor(name, breed) {
        // header
        this.name = name;
        this.breed = breed;
    }
    // class body
    getDetails() {
        console.log((`${this.name} is a ${this.breed}`));
    }

}


/**
 * Object.create( => Look up examples and compare
 */