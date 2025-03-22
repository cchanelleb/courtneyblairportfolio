document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const form = e.target;
    let isValid = true;

    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => (message.style.display = "none"));

    // Validate each field
    const name = form.name.value.trim();
    if (name === "") {
        showError("name", "Full name is required.");
        isValid = false;
    }

    const email = form.email.value.trim();
    if (!validateEmail(email)) {
        showError("email", "Enter a valid email address.");
        isValid = false;
    }

    const cardNumber = form["card-number"].value.trim();
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        showError("card-number", "Enter a valid 16-digit card number.");
        isValid = false;
    }

    const cvv = form.cvv.value.trim();
    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
        showError("cvv", "Enter a valid 3-digit CVV.");
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        alert("Order placed successfully!");
        form.reset();
    }
});

// Helper Functions
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = field.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
