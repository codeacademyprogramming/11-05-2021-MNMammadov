import { fetchCustomers, fetchUserData } from './api.js';
import { initHeader } from './header.js';
import { renderCustomerTable } from './customerTable.js';

async function initApp() {
    await fetchUserData();
    const customers = await fetchCustomers();
    initHeader(customers);
    renderCustomerTable(customers);
}

export { initApp };
