const input = document.querySelector("input");

const handleValidation = event => {
    if (input.value.length >= input.dataset.length){
        input.classList.remove("invalid");
        input.classList.add("valid")}
     else {input.classList.remove("valid");
        input.classList.add("invalid");}}

document.querySelector('#validation-input').addEventListener("blur", handleValidation)