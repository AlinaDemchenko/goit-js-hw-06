const handleInput = (event) =>
  (document.querySelector("#name-output").textContent =
    event.currentTarget.value || "Anonymous");

document.querySelector("#name-input").addEventListener("input", handleInput);
