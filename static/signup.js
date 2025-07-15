/*
document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('username');
    const usernameError = document.getElementById('username-error');

    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    const password2Field = document.getElementById('password2');
    const password2Error = document.getElementById('password2-error');

    // Username validation
    if (usernameField) {
        usernameField.addEventListener('input', function() {
            if (this.value.length > 10) {
                usernameError.textContent = "Username must be under 10 characters";
                usernameError.style.display = 'block';
            } else {
                usernameError.textContent = "";
                usernameError.style.display = 'none';
            }
        });
    }

    // Password complexity validation
    if (passwordField) {
        passwordField.addEventListener('input', function() {
            const password = this.value;
            let errors = [];

            if (password.length < 8) {
                errors.push("At least 8 characters");
            }
            if (!/[A-Z]/.test(password)) {
                errors.push("One uppercase letter");
            }
            if (!/[a-z]/.test(password)) {
                errors.push("One lowercase letter");
            }
            if (!/[0-9]/.test(password)) {
                errors.push("One number");
            }
            if (!/[!@#$%^&*()\-_=+\[\]{};:'\",.<>?/\\|`~]/.test(password)) {
                errors.push("One special character");
            }

            if (errors.length > 0) {
                passwordError.textContent = "Missing: " + errors.join(", ");
                passwordError.style.display = 'block';
            } else {
                passwordError.textContent = "";
                passwordError.style.display = 'none';
            }

            // Also check password match on input
            if (password2Field && password2Field.value !== password) {
                password2Error.textContent = "Passwords do not match";
                password2Error.style.display = 'block';
            } else {
                password2Error.textContent = "";
                password2Error.style.display = 'none';
            }
        });
    }

    // Password confirmation match validation
    if (password2Field) {
        password2Field.addEventListener('input', function() {
            if (passwordField && this.value !== passwordField.value) {
                password2Error.textContent = "Passwords do not match";
                password2Error.style.display = 'block';
            } else {
                password2Error.textContent = "";
                password2Error.style.display = 'none';
            }
        });
    }

    // Optional: Show/hide password toggle (add if you include eye icons)
    
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const passwordInput = document.getElementById(targetId);
            const iconElement = this.querySelector('i');

            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            if (type === 'password') {
                iconElement.classList.remove('fa-eye-slash');
                iconElement.classList.add('fa-eye');
            } else {
                iconElement.classList.remove('fa-eye');
                iconElement.classList.add('fa-eye-slash');
            }
        });
    });
    
});


*/

document.addEventListener('DOMContentLoaded', function() {
    // Username validation (max 10 characters + alphanumeric)
    const usernameField = document.getElementById('username');
    const usernameError = document.getElementById('username-error');

    if (usernameField) {
        usernameField.addEventListener('input', function() {
            const value = this.value;

            // Check length
            if (value.length > 10) {
                usernameError.textContent = "Username must be under 10 characters";
                usernameError.style.display = 'block';
                return;
            }

            // Check alphanumeric only
            const alphanumericRegex = /^[a-zA-Z0-9]*$/;
            if (!alphanumericRegex.test(value)) {
                usernameError.textContent = "Username must be alphanumeric (letters and numbers only)";
                usernameError.style.display = 'block';
                return;
            }

            // Clear error if all good
            usernameError.textContent = "";
            usernameError.style.display = 'none';
        });
    }

    // Password complexity validation
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    if (passwordField) {
        passwordField.addEventListener('input', function() {
            const password = this.value;
            let errors = [];

            if (password.length < 8) {
                errors.push("At least 8 characters");
            }
            if (!/[A-Z]/.test(password)) {
                errors.push("One uppercase letter");
            }
            if (!/[a-z]/.test(password)) {
                errors.push("One lowercase letter");
            }
            if (!/[0-9]/.test(password)) {
                errors.push("One number");
            }
            if (!/[!@#$%^&*()\-_=+\[\]{};:'\",.<>?/\\|`~]/.test(password)) {
                errors.push("One special character");
            }

            if (errors.length > 0) {
                passwordError.textContent = "Missing: " + errors.join(", ");
                passwordError.style.display = 'block';
            } else {
                passwordError.textContent = "";
                passwordError.style.display = 'none';
            }

            // Also check password match on password input
            if (password2Field && password2Field.value !== password) {
                password2Error.textContent = "Passwords do not match";
                password2Error.style.display = 'block';
            } else {
                password2Error.textContent = "";
                password2Error.style.display = 'none';
            }
        });
    }

    // Password confirmation validation
    const password2Field = document.getElementById('password2');
    const password2Error = document.getElementById('password2-error');

    if (password2Field) {
        password2Field.addEventListener('input', function() {
            if (passwordField && this.value !== passwordField.value) {
                password2Error.textContent = "Passwords do not match";
                password2Error.style.display = 'block';
            } else {
                password2Error.textContent = "";
                password2Error.style.display = 'none';
            }
        });
    }

    // Show/hide password toggle
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const passwordInput = document.getElementById(targetId);
            const iconElement = this.querySelector('i');

            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            if (type === 'password') {
                iconElement.classList.remove('fa-eye-slash');
                iconElement.classList.add('fa-eye');
            } else {
                iconElement.classList.remove('fa-eye');
                iconElement.classList.add('fa-eye-slash');
            }
        });
    });
});
