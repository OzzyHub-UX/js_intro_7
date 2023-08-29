
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

const books = [
    {
        name : 'Amok',
        author : {
            fName : 'Stefan',
            lName : 'Zewig',
        },
        genre : 'Novella',
    },

    {
        name : 'Harry Potter',
        author : {
            fName : 'Joanne',
            lName : 'Rowling',
        },
        genre : 'Fantasy',
    },

    {
        name : 'My Name Is Red',
        author : {
            fName : 'George',
            lName : 'Orwell',
        },
        genre : 'Historical',
    },
];

console.log(books);
console.log(books.length); // 3
console.log(books[1]); // {name: 'Harry Potter',author: { fName: 'Joanne', lName: 'Rowling' },genre: 'Fantasy'}
console.log(books[2].author.lName); // Orwell


let count = 0;

for (let i = 0; i <= books.length - 1; i++) {
    if(books[i].author.fName.toLowerCase().includes('a')) count++;
}

console.log(count);

count = 0;

for(const book of books) {
    if(book.author.fName.toLowerCase().includes('a')) count++;
}

console.log(count);