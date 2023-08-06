
// Replacing substrings

let str = "Can I can a can";

console.log(str.replace("can", "AAA")); // Can I AAA a can
console.log(str.replace(str, "***")); // ***
console.log(str.replaceAll("can", "AAA"));

// TRICKY PART
console.log(str.replace("cani", "AAA")); // Can I can a can 

// Tech Global - TechGlobal

