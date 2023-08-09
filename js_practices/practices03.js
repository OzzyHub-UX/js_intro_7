
function tripleWord(str){
    return str + str + str;
}

function tripleWord1(word){
    let tripleWord = "";
    for (let i = 0; i < 3; i++){
        tripleWord += word;
    }
    return tripleWord;
}

console.log(tripleWord("Tech"));
console.log(tripleWord1("Global"));


function has4(str){
    return (str.length >= 4);
}

console.log(has4("Tech"));


function celciusToFarenheit(celsius){
    return (celsius * 9) / 5 + 32;
}

console.log(celciusToFarenheit(20));
console.log(celciusToFarenheit(25));
console.log(celciusToFarenheit(0));


function kgToPounds(num1){
    return num1 * 2.2;
}

console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));

function rectangleArea(sideA, sideB){
    return sideA * sideB;
}

console.log(rectangleArea(5, 4));

function rectanglePerimeter(sideA, sideB){
    return 2 * (sideA + sideB);
}

console.log(rectanglePerimeter(5, 4));


function squareArea(num1){
    return num1 * num1
}

console.log(squareArea(5));

function squarePerimeter(num1){
    return 4 * num1
}

console.log(squarePerimeter(5));