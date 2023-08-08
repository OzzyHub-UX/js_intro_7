

let name = "John";
let name2 = "Alex";

// console.log(`Hello ${name}`); // Hello John
// console.log(`Hello ${name2}`); // Hello Alex

sayHello(name);
sayHello(name2);
sayHello("Bali");
sayHello("Yunus");
sayHello("Yulia");
sayHello("Ramez");


// I will give you a variable, print "Hello World"
function sayHello(a){
    console.log(`Hello ${a}`);
}

function printGoodMorning(){
    console.log("Good Morning");
}

printGoodMorning();

// Tricky Part 
sayHello("Igor");
sayHello();


// Write a function that takes 2 arguments and returns their sum

function findSum(arg0, arg1){
    return arg0 + arg1;
}


let variable = findSum(5, 10);
console.log(variable); // 15

console.log(findSum(20, 100));