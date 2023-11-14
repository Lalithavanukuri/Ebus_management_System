// admin.js
function adminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // You can implement authentication logic here
    // Check the entered username and password against a stored admin account
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful');
        // Redirect to the admin dashboard or perform other actions
    } else {
        alert('Invalid username or password');
    }
}
