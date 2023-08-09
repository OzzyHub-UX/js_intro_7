
let str1 = "I like apples and oranges";
let str2 = "Java is not a scripting programming language";
let str3 = "I don't like books";

console.log(str1.slice(7,12).toUpperCase());
console.log(str2.slice(0,4) + str2[14].toUpperCase() + str2.slice(15,20));
console.log(str3.replace("don't ", ""));


let str4 = "JavaScript";

console.log(`The length is = ${str4.length}`);
console.log(`The first char is = ${str4[0]}`);
console.log(`The last char is = ${str4[str4.length-1]}`);
console.log(str4.toLowerCase().includes("a") || 
str4.toLowerCase().includes("e") || 
str4.toLowerCase().includes("i")) || 
str4.toLowerCase().includes("o") || 
str4.toLowerCase().includes("u");


let str5 = "Yazan";

console.log(str5[Math.floor(str5.length / 2)]);


let str6 = "Bali";
console.log(str6[str6.length / 2 - 1] + str6[str6.length / 2]);