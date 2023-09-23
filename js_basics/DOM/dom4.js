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