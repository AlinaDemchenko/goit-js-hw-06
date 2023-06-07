const form = document.querySelector('form')

const handleLogin = event => {
event.preventDefault()
const{elements: {email, password}} = event.currentTarget;
if (email.value && password.value){
    const userLogin = {email: email.value, password: password.value};
    console.log(userLogin);
} else{
alert('Всі поля повинні бути заповнені!')}
event.currentTarget.reset();
}

form.addEventListener('submit', handleLogin)

