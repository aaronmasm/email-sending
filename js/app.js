"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const email = {
        email: '',
        cc: '',
        subject: '',
        message: ''
    };

    // Select elements from the interface
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputSubject = document.querySelector('#subject');
    const inputMessage = document.querySelector('#message');
    const form = document.querySelector('#form');
    const btnSubmit = document.querySelector('#form button[type="submit"]');
    const btnReset = document.querySelector('#form button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Assign events
    inputEmail.addEventListener('input', validate);
    inputCc.addEventListener('input', validate);
    inputSubject.addEventListener('input', validate);
    inputMessage.addEventListener('input', validate);

    form.addEventListener('submit', sendEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();
        resetForm();
    });

    function sendEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');

            resetForm();

            // Create a success alert
            const successAlert = document.createElement('P');
            successAlert.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10',
                'font-bold', 'text-sm', 'uppercase');
            successAlert.textContent = "Message sent successfully";

            form.appendChild(successAlert);

            setTimeout(() => {
                successAlert.remove();
            }, 3000);
        }, 3000);
    }

    function validate(e) {
        const id = e.target.id;
        const value = e.target.value.trim();

        // Specific validation for 'cc'
        if (id === 'cc') {
            if (value === '') {
                clearAlert(e.target.parentElement); // If 'cc' is empty, leave it without errors.
                email[id] = ''; // Leave it empty in the object.
            } else if (!validateEmail(value)) {
                showAlert("The Email is not valid", e.target.parentElement); // Show error if invalid.
                email[id] = value; // Keep the value so that `checkEmail` validates it correctly.
            } else {
                clearAlert(e.target.parentElement); // If valid, clear alerts.
                email[id] = value.toLowerCase(); // Save the value.
            }
            checkEmail(); // Validate general state.
            return;
        }

        // General validation for required fields (except 'cc')
        if (value === '') {
            showAlert(`The field ${e.target.name} is required`, e.target.parentElement);
            email[id] = '';
            checkEmail();
            return;
        }

        // Specific validation for 'email'
        if (id === 'email' && !validateEmail(value)) {
            showAlert("The Email is not valid", e.target.parentElement);
            email[id] = '';
            checkEmail();
            return;
        }

        // If everything is fine, clear the alert
        clearAlert(e.target.parentElement);
        email[id] = value.toLowerCase(); // Save the value in the object
        checkEmail(); // Validate general state
    }

    function showAlert(message, reference) {
        // Clear previous alert
        clearAlert(reference);

        // Generate alert in HTML
        const error = document.createElement('P');
        error.textContent = message;
        error.classList.add('bg-red-600', 'text-center', 'p-2', 'text-white', 'font-bold');

        // Inject the error into the form
        reference.appendChild(error);
    }

    function clearAlert(reference) {
        // Check if an alert already exists
        const alert = reference.querySelector('.bg-red-600');
        if (alert) {
            alert.remove();
        }
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function checkEmail() {
        const invalidCc = email.cc && !validateEmail(email.cc); // Only check if 'cc' is not empty and is invalid.

        // Validate required fields
        const requiredFields = ['email', 'subject', 'message'];
        const invalidFields = requiredFields.some(key => email[key] === '');

        if (invalidFields || invalidCc) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }

        // Enable the button if everything is valid
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetForm() {
        // Reset the object
        email.email = '';
        email.cc = '';
        email.subject = '';
        email.message = '';

        form.reset();
        checkEmail();
    }
});
