let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

console.log(decrementBtn);
console.log(incrementBtn);

const handleDecrement = event => document.querySelector('#value').textContent = counterValue -= 1;
const handleIncrement = event => document.querySelector('#value').textContent = counterValue += 1;

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);