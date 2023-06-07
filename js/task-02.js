const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const markup = ingredients.map(el => `<li class="item">${el}</li>`).join('');

list.insertAdjacentHTML('beforeend', markup)



