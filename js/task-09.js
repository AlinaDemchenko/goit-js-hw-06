const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleChangeColor = event =>{
  const currentColor = getRandomHexColor();
 body.style.backgroundColor = currentColor;
 color.textContent = currentColor;
  }

btn.addEventListener('click', handleChangeColor)