const name = document.querySelector("#name-output");

const handleInput = (event) =>
  (name.textContent =
    event.currentTarget.value || "Anonymous");

document.querySelector("#name-input").addEventListener("input", handleInput);
