
const names = ['John', 'Max', 'Alex', 'Jane'];

for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i]);
}

for (let name of names){
    console.log(name);
}

console.log("\n------------------------------------\n");

for(let i = 0; i <= names.length - 1; i++){
    console.log(`Uppercase ${names[i].toUpperCase()}`);
}

for(let name of names){
    console.log(name.toUpperCase());
}

console.log("\n------------------------------------\n");

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let count = 0;

for(let i = 0; i <= numbers.length - 1; i++){
    if (numbers[i] > 0) count++;
}

console.log(`Number of postive numbers is = ${count}`);