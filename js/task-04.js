let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

const handleDecrement = event => counter.textContent = counterValue -= 1;
const handleIncrement = event => counter.textContent = counterValue += 1;

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);