
const student = {
    firstName : 'Alex',
    lastName : 'Smith',
    hobbies : ['Soccer', 'Watching movies'],
    exam_scores : {
        midterm : 60,
        final : 90,
    }
};

/*
const examScores = {
    midterm : 60,
    final   : 90,
};

student.examScores = examScores;
*/

console.log(student);

console.log("-----------------------------");

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);
console.log((student.exam_scores.midterm + student.exam_scores.final) / 2);

console.log("-----------------------------");

const book = {
    name : 'Amok',
    author : {
        fName : 'Stefan',
        lName : 'Zewig',
    },
    genre : 'Novella',
};

console.log(book);


console.log("-----------------------------");
