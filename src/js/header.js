import { loanActiveStatus, deleteCookie, getUserData } from './utils.js';
import { changeTheme } from './theme.js';
import { renderCustomerTable } from './customerTable.js';

function initHeader(customers) {
    const selectOption = document.getElementById('loan-status-filter');
    const searchInputCustomer = document.getElementById('search-customer');
    const logoutBtn = document.getElementById('logout-btn');
    const themeSwitcher = document.getElementById('theme-switcher');
    const userProfileName = document.getElementById('user-profile-name');

    const { name } = getUserData();
    userProfileName.innerText = `${name.title} ${name.first} ${name.last}`;

    // Filter by loans status.
    selectOption.addEventListener('change', function (event) {
        if (event.target.value === "all") {
            renderCustomerTable(customers);
        } else if (event.target.value === "active") {
            const loanActiveCustomers = customers.filter(function (element) {
                return loanActiveStatus(element);
            });

            renderCustomerTable(loanActiveCustomers);
        } else {
            const loanNonActiveCustomers = customers.filter(function (element) {
                return !loanActiveStatus(element);
            });

            renderCustomerTable(loanNonActiveCustomers);
        }
    });

    searchInputCustomer.addEventListener('keyup', function (event) {
        const searchValue = event.target.value.toLowerCase();
        const searchingCustomers = customers.filter(function (element) {
            const fullName = element.name + ' ' + element.surname;
            return fullName.toLowerCase().includes(searchValue);
        });

        renderCustomerTable(searchingCustomers);
    });

    logoutBtn.addEventListener('click', function () {
        sessionStorage.removeItem('userData');
        deleteCookie('token');
        window.location.pathname = "/src/login.html";
    });

    themeSwitcher.addEventListener('change', (event) => {
        changeTheme(event.target.checked ? 'dark' : 'light');
    });
}

export { initHeader };