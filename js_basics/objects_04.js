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





console.log("\n----------------------------------------------\n");


const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];
// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]

let mostExpensive = {
    productName : null,
    price : 0,
    quantity : 0
};

let leastExpensive = {
    productName : null,
    price : appleStore[0].price,
    quantiy : 0
};

let leastQuantity = {
    productName : null,
    price : 0,
    quantity : appleStore[0].quantity
};

let greatestQuantity = {
    productName : null,
    price : 0,
    quantity : 0
};


let productNames = [];

for(const product of appleStore){
    if(product.price > mostExpensive.price) mostExpensive = product;
    if (product.price < leastExpensive.price) leastExpensive = product;
    if (product.quantity > greatestQuantity.quantity) greatestQuantity = product;
    if (product.quantity < leastQuantity.quantity) leastQuantity = product;
    productNames.push(product.productName);
}




console.log(`The most expensive product is a ${mostExpensive.productName}.`);
console.log(`The least expensive product is ${leastExpensive.productName}`);
console.log(`The product with the biggest quantity is ${greatestQuantity.productName}.`);
console.log(`The product with the smallest quantity is ${leastQuantity.productName}.`);
console.log(productNames);

