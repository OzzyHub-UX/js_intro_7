
// Named export 
export const add = (num1, num2) => {
    return num1 + num2;
};


export const subtract = (num1, num2) => {
    return num1 - num2;
};

// Different way of exporting named functions
export {
    add,
    subtract
};
