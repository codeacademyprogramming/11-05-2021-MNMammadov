//email: admin@admin
//password: admin

import { setCookie } from './utils.js';

const userNameInput = document.getElementById('userName');
const userfullNameInput = document.getElementById('userFullName');
const userEmailInput = document.getElementById('userEmail');
const userPasswordInput = document.getElementById('userPassword');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (userEmailInput.value == 'admin@admin' && userPasswordInput.value == 'admin') {
        window.location.pathname = "/src/index.html";

        const userData = {
            userName: userNameInput.value,
            email: userEmailInput.value,
            fullName: userfullNameInput.value
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        setCookie('token', 'supersecuretoken', 1);
    } else {
        alert('email or passwor wrong!!!');
    }
});
