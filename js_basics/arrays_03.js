const students = [];

students.push('Alex');

console.log(students); // [ 'Alex' ]

students.push('John', 'John', 'Jane');

console.log(students); // [ 'Alex', 'John', 'John', 'Jane' ]

students.push(['Mark', 'Max', 'Maria']);

console.log(students); // [ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ] ]
console.log(students.length); // 5

students.pop();
students.pop();

console.log(students); // [ 'Alex', 'John', 'John' ]

const newArry = [];

let result = newArry.pop();

console.log(result); // undefined



