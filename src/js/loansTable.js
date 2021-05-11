function renderLoansTable(loans) {
    const tableBody = document.getElementById('loans-table-body');

    // Empty table body
    tableBody.innerHTML = '';

    loans.forEach((loan, i) => {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerText = i + 1;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = loan.loaner;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = loan.amount.value + ' ' + loan.amount.currency;
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.innerText = loan.closed ? "No" : "Yes";
        tr.appendChild(td4);

        const td5 = document.createElement('td');
        if (loan.perMonth) {
            td5.innerText = loan.perMonth.value + " " + loan.perMonth.currency;
        } else {
            td5.innerText = '-';
        }
        tr.appendChild(td5);

        const td6 = document.createElement('td');
        td6.innerText = loan.dueAmount.value + " " + loan.dueAmount.currency;
        tr.appendChild(td6);

        const td7 = document.createElement('td');
        td7.innerText = loan.loanPeriod.start + "-" + loan.loanPeriod.end;
        tr.appendChild(td7);

        tableBody.appendChild(tr);
    });
}

export { renderLoansTable };