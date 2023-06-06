const list = document.querySelector('ul');

const countCategories = el => `Number of categories: ${list.children.length}`;

console.log(countCategories(list));

const CategoryElements = document.querySelectorAll('.item').forEach(item =>
console.log(`Category: ${item.querySelector('h2').textContent} \nElements: ${item.querySelector('ul').children.length}`));
 

