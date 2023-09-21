// Import all elements
const parentElement = document.getElementById('parent');
console.log(parentElement);

/**
 * Get all the childNodes or children of parentElement
 */

// Get all the child nodes of parentElement
const childLi = parentElement.childNodes;
console.log(childLi); // nodes + text


const children = parentElement.children;
console.log(children); // nodes

/*

If you have get nodes and extra information like text use childNodes,
else use children

*/


/**
 * Get parent element
 */

const countriesHeading = document.getElementById('countries');
const parentOfHeading = countriesHeading.parentElement;
console.log(parentOfHeading); 


/**
 * Get first and last child
 */

const firstLi = parentElement.firstChild;
const lastLi = parentElement.lastChild;
console.log(firstLi); // gives text
console.log(lastLi); // gives text 


/**
 * Get first and last child
 */

const firstLiElement = parentElement.firstElementChild;
const lastLiElement = parentElement.lastElementChild;
console.log(firstLiElement); // gives text
console.log(lastLiElement); // gives text 


/**
 * Get sibling elements
 */

const leftSibling = firstLiElement.previousElementSibling;
console.log(leftSibling); // null
const rightSibling = firstLiElement.nextElementSibling;
console.log(rightSibling); // Nigeria


/**
 * Node Attributes
 */

const container = document.querySelector('.contianer');
const images = document.querySelectorAll('img');
// const images = contianer.children; => same as above

const firstImage = images[0];
// get src of image element

console.log(firstImage.src); // url 
console.log(firstImage.alt); // alt text

const newUrl = 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80'
// update src of first image
firstImage.src = newUrl;
console.log(firstImage);

// getAttribute
const imgUrl = firstImage.getAttribute('src');
console.log(imgUrl === newUrl); // true 

// setAttribute
firstImage.setAttribute('alt', 'Beautiful nature');
const altText = firstImage.getAttribute('alt'); // 'Beautiful nature'
console.log(altText === 'Beautiful nature');


/**
 * STYLING  
 */

const bodyEl = document.querySelector('body');
console.log(bodyEl);

// change bg color of body element 
bodyEl.style.backgroundColor = 'lightgray';
// align elements inside body to center
bodyEl.style.textAlign = 'center';

for(let i = 0; i < images.length; i++) {
    let imageEl = images[i];

    // style image element
    imageEl.style.width = '250px';
    imageEl.style.height = '150px';
    imageEl.style.border = '4px solid green';
}

// stle parent element
parentElement.style.backgroundColor = 'gray';
parentElement.style.width = '150px';
parentElement.style.listStyle = 'none';
parentElement.style.backgroundColor = '0';


/**
 * className vs classList
 */

const boxEl = document.querySelector('.box');

console.log(boxEl.className);
console.log(boxEl.classList);


// boxEl.className += 'box2';

// boxEl.classList.add(' box 3');
// boxEl.classList.remove('box');

/**
 * innerHTML
 */

// bodyEl.innerHTML = '';

// Add html into dom n
parentElement.innerHTML = `
        <li>USA</li>
        <li>Nigeria</li>
        <li>Japan</li>
        <li>Germany</li>
        <li>France</li>
`

