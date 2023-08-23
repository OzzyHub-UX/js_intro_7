const arr1 = [2, 3, 5];

const arr2 = arr1.reverse();

console.log(arr1); // [ 5, 3, 2 ]
console.log(arr2); // [ 5, 3, 2 ]


const arr3 = arr2.reverse();

console.log(arr1); // [ 2, 3, 5 ]
console.log(arr2); // [ 2, 3, 5 ]
console.log(arr3); // [ 2, 3, 5 ]


// slice() and splice()
// slice() is used to get sub-array from an array
// splice() is used to add or remove elements from an array

const arr = ['Grapes', 'Kiwi', 'Apple', 'Orange'];

const sub_array_1 = arr.slice(); // ['Grapes', 'Kiwi', 'Apple', 'Orange']
const sub_array_2 = arr.slice(0); // ['Grapes', 'Kiwi', 'Apple', 'Orange']
const sub_array_3 = arr.slice(1); // ['Kiwi', 'Apple', 'Orange']

console.log(sub_array_1);
console.log(sub_array_2);
console.log(sub_array_3);

const sub_array_4 = arr.slice();
const sub_array_5 = arr.slice();
const sub_array_6 = arr.slice(2, 8);



console.log(sub_array_6);