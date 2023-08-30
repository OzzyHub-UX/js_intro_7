const student = {
    fName : 'Alex',
    lName : 'Smith',
    age : 30,
    fullName : function (){
        return `${this.fName} ${this.lName}`;
    }
};

console.log(student.fName); // Alex
console.log(student.age); // 30
console.log(student.fullName()); // [Function: fullName]
