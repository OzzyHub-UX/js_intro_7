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


const noXInVariables = arr => {
    return arr.map(word => {
      if (typeof word === 'string') {
        return word.split('').filter(letter => letter.toUpperCase() !== 'X').join('');
      }
      return word;
    }).filter(word => word.length > 0);
  };
  
  console.log(noXInVariables(['abc', 123, '#$%']));
  console.log(noXInVariables(['xyz', 123, '#$%']));
  console.log(noXInVariables(['x', 123, '#$%']));
  console.log(noXInVariables(['xyXyxy', 'Xx', 'ABC']));