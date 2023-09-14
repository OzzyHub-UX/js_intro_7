// Closure practice

var a = 12;
(function () {
    console.log(a);
    // console.log(b); 1
    function f() {
        console.log(a);
    }
    f()
})();

let place = 'Planet Earth';

function HQ(place) {
    place = 'Planet Earth';
    return middleFunction('United States');

    function middleFunction(country) {
        return innerFunction('Illinois');

        function innerFunction(state) {
            city = "Chicago"
            return innermostFunction();

            function innermostFunction() {
                return 'Techglobal is at ' + place + ', ' + country + ', ' + state + ', ' + city;
            }
        }
    }
}

console.log(HQ());