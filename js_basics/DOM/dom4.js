/**
 * DOM Events
 */

const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', (event) => {
    console.log('You clicked! =>', event.target);
})

// dbclick
const dblclick = document.getElementById('dblClickBtn');

dblclick.addEventListener('dblclick', (event) => {
    console.log('You double clicked =>', event.target);
})


// mouse down
const mousedownBtn = document.getElementById('mouseDownBtn');

mousedownBtn.addEventListener('mousedown', (event) => {
console.log('You pressed down => ', event.target)
});


// mouse up
const mouseUpBtn = document.getElementById('mouseUpBtn');

mouseUpBtn.addEventListener('mouseup', (event) => {
    console.log('You pressed down => ', event.target)
    });

// mousemove
const mouseMoveBtn = document.getElementById('mouseMoveBtn');

mouseMoveBtn.addEventListener('mousemove', (event) => {
    console.log('You moving inside botton => ', event.target);
});


// mouseout 
const mouseOutBtn = document.getElementById('mouseOutBtn');

mouseOutBtn.addEventListener('mouseout', (event) => {
    console.log('You moved out of =>', event.target);
});


/**
 * Keyword Events
 */

const body = document.querySelector('body');

//key down
body.addEventListener('keydown', (event) => {
    console.log('Keydown event => ', event.target);
})

// keyup
body.addEventListener('keyup', (event) => {
console.log('Keyup event =>', event.target)
});


//keypress
body.addEventListener('keypress', (event) => {
    console.log('Keypress event =>', event.target)
    });
    
