
for(let i = 1; i < 10; i++) {
    console.log(i);
}


// while version of above
let num = 1;
let countE = 0;

while(num < 10){
    if(num % 2 === 0) countE++;
    num++;
}

console.log(countE);