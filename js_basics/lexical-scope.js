const schoolName1 = "Tech Global";

function schoolProfile() {
    const schoolName = "Global Tech";
    function saySchoolName() {
        const schoolName = "Tech";
        function writeSchoolName() {
            return schoolName; //
        }
       return writeSchoolName();
    }
    return saySchoolName();
}

console.log(schoolProfile());
// Scope Chaining 
// writeSchoolName() scope ---> saySchoolName() scope ---> schoolProfile() scope ---> global scope



// Define a function:
function getCityName() {
    const cityName = "Des Plaines";
    return cityName;
}

function showAddress() {
    return "2860 River Rd, " + getCityName();
}

console.log(showAddress());

console.log("foo:", foo);
console.log("bar", bar);
var foo = 'foo';