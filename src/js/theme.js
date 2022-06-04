const navbar = document.getElementById('navbar');
const customersTable = document.getElementById('customers-table');
const loansTable = document.getElementById('loans-table');
const themeSwitcher = document.getElementById('theme-switcher');

function changeTheme(theme) {
    if (theme === 'dark') {
        localStorage.setItem('theme', 'dark');
        themeSwitcher.checked = true;

        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        customersTable.classList.remove('table-light');
        customersTable.classList.add('table-dark');
        loansTable.classList.remove('table-light');
        loansTable.classList.add('table-dark');
    } else {
        localStorage.setItem('theme', 'light');
        themeSwitcher.checked = false;

        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        customersTable.classList.remove('table-dark');
        customersTable.classList.add('table-light');
        loansTable.classList.remove('table-dark');
        loansTable.classList.add('table-light');
    }
}

export { changeTheme };
