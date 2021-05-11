import { calculateTotalMontlyPay, loanActiveStatus } from './utils.js';
import { renderLoansTable } from './loansTable.js';

function renderCustomerTable(customers) {
    const tableBody = document.getElementById('customer-table-body');
    const loansModal = new bootstrap.Modal(document.getElementById('loansModal'));

    tableBody.innerHTML = '';

    for (var i = 0; i < customers.length; i++) {
        const customer = customers[i];
        const tr = document.createElement('tr');

        tr.addEventListener('click', function () {
            renderLoansTable(customer.loans);
            loansModal.show();
        });

        tr.setAttribute('class', 'cursor-p');

        const td1 = document.createElement('td');
        td1.innerText = i + 1;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = customer.name + ' ' + customer.surname;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        const image = document.createElement('img');
        image.setAttribute('class', 'card-img-top');
        image.setAttribute('alt', 'Profile photo');
        image.src = customer.img
        td3.appendChild(image);
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.innerText = customer.salary.value + ' ' + customer.salary.currency;
        tr.appendChild(td4);

        const td5 = document.createElement('td');
        const hasActiveLoan = loanActiveStatus(customer);
        td5.innerText = hasActiveLoan ? 'Yes' : 'No';
        tr.appendChild(td5);

        const td6 = document.createElement('td');
        let totalMonthlyPay = 0;
        if (!hasActiveLoan) {
            td6.innerText = '-';
        } else {
            totalMonthlyPay = calculateTotalMontlyPay(customer.loans);

            td6.innerText = totalMonthlyPay + ' ' + 'AZN';
        }
        tr.appendChild(td6);

        const td7 = document.createElement('td');
        const maxMonthlyPay = customer.salary.value * 0.45;
        td7.innerText = totalMonthlyPay < maxMonthlyPay ? "Yes" : "No";
        tr.appendChild(td7);

        tableBody.appendChild(tr);
    };
}

export { renderCustomerTable };