const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleRange = event => text.style.fontSize = `${input.value}px`;
input.addEventListener('input', handleRange);