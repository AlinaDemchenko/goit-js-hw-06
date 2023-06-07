const btn = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const handleChangeColor = event =>{
  const currentColor = getRandomHexColor();
   document.querySelector('body').style.backgroundColor = currentColor;
   document.querySelector('.color').textContent = currentColor;
  }

btn.addEventListener('click', handleChangeColor)