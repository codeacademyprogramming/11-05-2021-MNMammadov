// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    setCookie(cname, "", 0);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Calculate customer's monthly pay.
function calculateTotalMontlyPay(loans) {
    const total = loans.reduce(function (sum, currentElement) {
        if (!currentElement.closed) {
            return sum + currentElement.perMonth.value;
        }
        return sum;
    }, 0);

    return total;
}

function loanActiveStatus(customer) {
    return customer.hasLoanHistory && customer.loans.some((loan) => !loan.closed);
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export { setCookie, getCookie, deleteCookie, calculateTotalMontlyPay, loanActiveStatus, getUserData };