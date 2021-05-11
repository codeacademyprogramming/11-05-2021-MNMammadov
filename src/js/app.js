import { fetchCustomers, fetchUserData } from './api.js';
import { initHeader } from './header.js';
import { renderCustomerTable } from './customerTable.js';

async function initApp() {
    await fetchUserData();
    const customers = await fetchCustomers();
    const loadingAnimation = document.getElementById('loading-animation');
    loadingAnimation.classList.add("hidden");

    initHeader(customers);
    renderCustomerTable(customers);
}

export { initApp };
