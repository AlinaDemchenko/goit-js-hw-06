const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(el => {const li = document.createElement('li'); li.textContent = el; li.classList.add('item'); document.querySelector('#ingredients').append(li);})

