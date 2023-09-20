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
// set item in local storage
window.localStorage.setItem('name', 'John')
window.localStorage.setItem('issLoggedIn', false)
window.localStorage.setItem('userId', 1234)
window.localStorage.setItem('userInfo', {name: 'John', email: 'johndoe@gmail.com'})

