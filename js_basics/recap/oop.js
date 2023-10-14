const person = {
    name: 'John',
    eat: function () {
        console.log('Eat');
    },
    sleep: function () {
        console.log('Sleep');
    }
};

per
// BEFORE ES6
function person (name) {
    this.name = name;
    this.eat = function () {
        console.log('Eat');
    }
    this.sleep = function () {
        console.log('Sleep');
    }
};


const person1 = new person('Ale')