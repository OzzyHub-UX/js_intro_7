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