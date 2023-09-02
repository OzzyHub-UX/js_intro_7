const names = ['John', 'Jane', 'Alex'];

console.log(names.map((name) => name.toUpperCase()));

const result = names.map((name, i) => ({
    index : i,
    value : name
}));

console.log(result);