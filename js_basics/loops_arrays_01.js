
const names = ['John', 'Max', 'Alex', 'Jane'];

for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i]);
}

for (let name of names){
    console.log(name);
}

console.log("\n------------------------------------\n");

for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i].toUpperCase());
}

for(let name of names){
    console.log(name.toUpperCase());
}

console.log("\n------------------------------------\n");
