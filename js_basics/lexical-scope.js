const schoolName = "Tech Global";

function schoolProfile() {
    const schoolName = "Global Tech";
    function saySchoolName() {
        const schoolName = "Tech";
        function writeSchoolName() {
            return schoolName; // "Tech Global"
        }
       return writeSchoolName();
    }
    return saySchoolName();
}

console.log(schoolProfile());
// Scope Chaining 
// writeSchoolName() scope ---> saySchoolName() scope ---> schoolProfile() scope ---> global scope