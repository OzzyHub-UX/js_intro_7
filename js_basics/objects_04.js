const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];


console.log(users.length); // 4
// Count how many users are older than 30   -> 2


console.log("\n----------------------------------------------\n");

let countOlder30 = 0;

for (const user of users){
    if(user['age'] > 30) countOlder30++;
}

console.log(`There are ${countOlder30} user/s older than 30`);


console.log("\n----------------------------------------------\n");


const olderThan30 = users.filter(user => user.age > 30).length;

console.log(olderThan30);


console.log("\n----------------------------------------------\n");

let countCityChi = 0;

for (const user of users){
    if(user['address']['city'].toLowerCase() === 'chicago') countCityChi++;
}

console.log(`There are ${countCityChi} user/s that live in Chicago.`);


console.log("\n----------------------------------------------\n");

const namesYoungerThan35 = [];

for (const user of users) {
    if (user.age < 35) {
        namesYoungerThan35.push(`${user.firstName}`);
    }
}

console.log(namesYoungerThan35);


console.log("\n----------------------------------------------\n");

let sumOfAges = 0;

for(const user of users) {
    sumOfAges += user.age;
}

console.log(`The average of all the ages = ${sumOfAges/users.length}`);
