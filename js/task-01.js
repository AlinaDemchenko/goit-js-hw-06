const list = document.querySelector('ul');

console.log(`Number of categories: ${list.children.length}`);

const CategoryElements = [...list.children].forEach(item =>
console.log(`Category: ${item.firstElementChild.textContent} \nElements: ${item.querySelector('ul').children.length}`));
 



 

