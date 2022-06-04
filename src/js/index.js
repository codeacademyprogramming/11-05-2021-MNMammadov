import { initApp } from './app.js';
import { getCookie } from './utils.js';
import { changeTheme } from './theme.js';

if (getCookie('token') === 'supersecuretoken') {
    const theme = localStorage.getItem('theme');

    if (theme) {
        changeTheme(theme);
    } else {
        localStorage.setItem('theme', 'light');
    }

    initApp();
} else {
    window.location.pathname = "/src/login.html";
}