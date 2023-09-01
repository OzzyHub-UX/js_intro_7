
//Task01
console.log("\n-------------------------------------\n");

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