document.getElementById('loginForm').addEventListener('submit', function (event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your validation logic here
    if (username === 'user' && password === '123') {
        // Valid credentials, allow form submission
        alert('Login successful');
        setTimeout(function() {window.location = "http://127.0.0.1:5500/redirectedpage.html" }); // Replace with the desired URL
    } else {
        // Invalid credentials, prevent form submission
        alert('Invalid username or password');
        event.preventDefault();
    }
});
