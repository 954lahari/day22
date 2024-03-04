// script.js
const customerList = document.getElementById('customer-list');

function addCustomer() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const customerInfo = document.createElement('div');
        customerInfo.innerHTML = `<strong>Name:</strong> ${name}, <strong>Email:</strong> ${email}`;
        customerList.appendChild(customerInfo);

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Please enter both name and email.');
    }
}
