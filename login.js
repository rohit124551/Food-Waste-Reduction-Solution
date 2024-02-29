function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Authentication Pwd here 
    if (username === "12345" && password === "54321") {
        window.location.href="index.html";

    } else {
        errorMessage.innerHTML = "Invalid username or password";
    }
}