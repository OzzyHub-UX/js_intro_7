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
