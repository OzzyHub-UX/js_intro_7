const askUserList1 = window.prompt('Please enter a TODO');
console.log(askUserList1);
const askUserList2 = window.prompt('Please enter a TODO');
console.log(askUserList2);
const askUserList3 = window.prompt('Please enter a TODO');
console.log(askUserList3);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = askUserList1;

const li2 = document.createElement('li');
li2.textContent = askUserList2;

const li3 = document.createElement('li');
li3.textContent = askUserList3;

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);

