async function fetchUserData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const userData = data.results[0];
    sessionStorage.setItem("userData", JSON.stringify(userData));

    return userData;
};

async function fetchCustomers() {
    const res = await fetch('./data/customers.json');
    const data = await res.json();

    return data;
};

export { fetchCustomers, fetchUserData };