const person = {
    name: 'John',
    eat: function () {
        console.log('Eat');
    },
    sleep: function () {
        console.log('Sleep');
    }
};

// BEFORE ES6
function person (name) {
    this.name = name;
    function eat () {
        console.log('Eat');
    }
    function sleep (){
        console.log('Sleep');
    }
};