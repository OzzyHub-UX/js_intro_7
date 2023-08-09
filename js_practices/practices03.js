
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
    return (str.length > 4);
}

console.log(has4("TechG"));