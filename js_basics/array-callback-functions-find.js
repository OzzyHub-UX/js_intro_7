const numbers = [0, 10, -4, 5, 2, -3];

console.log(numbers.find(x => x > 0)); // 10
console.log(numbers.find(x => x < 0)); // 10
console.log(numbers.find(x => x % 2 ===0)); // 10
console.log(numbers.find(x => x % 2 !== 0)); // 10

// First positive               -> 10
// First negative               -> -4
// First even                   -> 0
// First odd                    -> 5
// First number more than 100   -> undefined

// The index of first positive              -> 1
// The index of first negative              -> 2
// The index of first even                  -> 0
// The index of first odd                   -> 3
// The index of first number more than 100  -> -1




const things = ['Knife', 'Spoon', 'Fork', 'Pen', 'Mug'];

const result = things.map((v, i) => {
    return {
        value: v,
        index: i
    }
}).find(obj => obj.value.length === 3);

console.log(result);

// const length3 = things.find(x => x.length === 3);
// const index3 = things.findIndex(x => x.length === 3);

// const result = {
//     value: things.find(x => x.length === 3),
//     index: things.findIndex(x => x.length === 3)
// };

// console.log(result);

