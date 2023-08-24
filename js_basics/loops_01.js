
for(let i = 0; i < 5; i++){
    console.log("Hello");
}

/*
Write a program that outputs numbers from 5 to 25
5
6
7
.
.
.
.
24
25
*/

for(let i = 5; i <= 25; i++){
    console.log(i);
}


/*
Write program that outputs number between 15 and 1 descending
15
14
13
.
.
.
.
3
2
1
*/

for(let i = 15; i >= 1; i--){
    console.log(i);
}

/*
Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)
        Expected output:
        0
        2
        4
        6
        8
        10
*/
for(let i = 0; i <= 10; i++){
    if (i % 2 === 0) console.log(i);
}

for(let i = 0; i <= 10; i += 2){
    console.log(i);
}

console.log("---------------------");

for(let i = 1; i <= 50; i++){
    if (i % 5 === 0) console.log(i);
}

console.log("---------------------");

for(let i = 1; i <= 50; i++){
    if (i % 5 !== 0) continue;
    console.log(i);
}

console.log("---------------------");

let sum = 0;

for(let i = 1; i <= 5; i++){
    sum += i;
}

console.log(sum);

console.log("---------------------");

let sum1 = 0;

for(let i = 10; i <= 15; i++){
    sum1 += i;
}

console.log(sum1);


console.log("---------------------");

let str = "TechGlobal School";
let newStr = "";

for(let i = 0; i <= str.length; i++){
    console.log(str.charAt(i));
}



