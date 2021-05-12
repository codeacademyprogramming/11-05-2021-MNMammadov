//user: admin
//password: admin

import { setCookie } from './utils.js';

const userNameInput = document.getElementById('userName');
const userPasswordInput = document.getElementById('userPassword');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (userNameInput.value == 'admin' && userPasswordInput.value == 'admin') {
        window.location.pathname = "./src/index.html";
        setCookie('token', 'supersecuretoken', 1);
    } else {
        alert('User or password wrong!!!');
    }
});
