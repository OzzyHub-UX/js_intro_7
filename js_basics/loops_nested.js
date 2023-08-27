
for(let i = 1; i <= 3;i++){
    console.log('OUTER', i);
    for(let j = 1; j <= 5; j++)
    console.log('\tINNER', j);
}


const studentGroups = [
    ['Alex', 'Max', 'Jane']
    ['John', 'James']
    ['Ryan', 'Tom']
];

for(const group of studentGroups){
    console.log(group);
    for(const person of group){
        console.log(person);
    }
}

