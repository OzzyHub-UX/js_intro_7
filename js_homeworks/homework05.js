//Task01
console.log("\n-------------------------------------\n");

// For Of Loop
function countPos(arr1){

    let countPos = 0;

    for(const number of arr1) {
        if(number > 0) countPos ++;
    };

    return countPos++;
};

console.log(countPos([-45,0,0,34,5,67]));
console.log(countPos([-23,-4,0,2,5,90,123]));
console.log(countPos([0,-1,-2,-3]));

console.log("|\n|");

//For Loop
function countPos1(arr1) {

    let countPos1 = 0;

    for(let i = 0; i <= arr1.length - 1; i++){
        if(arr1[i] > 0) countPos1++;
    };

    return countPos1;
};

console.log(countPos1([-45,0,0,34,5,67]));
console.log(countPos1([-23,-4,0,2,5,90,123]));
console.log(countPos1([0,-1,-2,-3]));


//Task02
console.log("\n-------------------------------------\n");

//For Of Loop
function countA(str){

    let countA = 0;

    for(const letter of str){
        if(letter.toLowerCase().includes('a')) countA++;
    };

    return countA;
};

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA Stands For Quality Assurance"));
console.log(countA("Cypress"));

console.log("|\n|");

//For Loop
function countA1(str){

    let countA1 = 0;

    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].toLowerCase().includes('a')) countA1++;
    };

    return countA1;
};

console.log(countA1("TechGlobal is a QA bootcamp"));
console.log(countA1("QA Stands For Quality Assurance"));
console.log(countA1("Cypress"));


//Task03
console.log("\n-------------------------------------\n");

//For Of Loop
function countVowels(str){

    let countVowels = 0;

    for(const letter of str){
        if(letter.toLowerCase().includes('a') || 
        letter.toLowerCase().includes('e') || 
        letter.toLowerCase().includes('i') || 
        letter.toLowerCase().includes('o') || 
        letter.toLowerCase().includes('e')) countVowels++;
    };

    return countVowels++;
};

