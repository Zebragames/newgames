function login() {
    const userID = document.getElementById('userID').value;
    const userPassword = document.getElementById('userPassword').value;

    if (userID === 'zebra@123' && userPassword === 'ruby@123') {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.content-container').style.display = 'flex';
    } else {
        alert('Invalid ID or Password');
    }
}