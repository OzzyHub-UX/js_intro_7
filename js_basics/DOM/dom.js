// DOM

// Window object
console.log("window", window); // ReferenceError: window is not defined


// alert
// window.alert('Here is the alert message!');


// prompt
// let promptResult = window.prompt();
// console.log(promptResult);


// confirm
// let confirmResult = window.confirm('Are you ready?');
// console.log(confirmResult);


// innerWidth and innerHeight
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log("height", innerHeight);


// scrollTo(x,y);
// window.scrollTo(0,0);// scroll page to the top

// location - object
// window.location.reload(); // reloads page

// localStorage
console.log(window.localStorage.length); // 0 empty

// Set item in local storage
window.localStorage.setItem('name', 'John')
window.localStorage.setItem('issLoggedIn', false)
window.localStorage.setItem('userId', 1234)
window.localStorage.setItem('userInfo', JSON.stringify({ name: 'John', email: 'johndoe@gmail.com' }));

// Get item from localStorage 
console.log(window.localStorage.getItem('name', 'John'))
console.log(window.localStorage.getItem('issLoggedIn', false))
console.log(window.localStorage.getItem('userId', 1234))
console.log(window.localStorage.getItem('userInfo'));







let nameUser = window.prompt('Hello! What is your name?')
console.log(nameUser);

if (nameUser === null || nameUser === '' || nameUser === undefined) {
    window.alert('You didnt provide your name. Bye Bye!');
}
else {
window.alert('Hello ' + nameUser + '!')
}

let userContinueConfirm = window.confirm('Would you like to continue?');
console.log(userContinueConfirm);

if (userContinueConfirm === true) {
    window.alert('You have chose to continue!')
    console.log(window.innerWidth);
    console.log(window.innerHeight);


const doesUserWantsRedirect = window.confirm('Would you like to go to a different page or reload the page?')
if(doesUserWantsRedirect) {
    setTimeout(() => {
        window.open('https://google.com');
    }, 10000)
}
else {
    setTimeout(() => {
        window.location.reload();
    }, 10000);
}
}
else {
    window.alert('You canceled the action!')
}

