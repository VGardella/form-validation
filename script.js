const inputFields = document.querySelectorAll('input');
const firstNameField = document.getElementById('first-name');
const lastNameField = document.getElementById('last-name');
const emailField = document.getElementById('email');
const countryField = document.getElementById('country');
const zipCodeField = document.getElementById('zip-code');
const passwordField = document.getElementById('password');
const repPasswordField = document.getElementById('rep-password');

// Email

emailField.addEventListener('input', () => {
    if (emailField.validity.typeMismatch) {
        emailField.classList.add('invalid');
        emailField.classList.remove('valid');
        emailField.setCustomValidity('I\'m expecting an email address!');
    }
    else {
        emailField.classList.add('valid');
        emailField.classList.remove('invalid');
        emailField.setCustomValidity('');
    }
})

// First and Last names

firstNameField.addEventListener('input', () => {
    if (firstNameField.validity.valueMissing) {
        firstNameField.classList.add('invalid');
        firstNameField.classList.remove('valid');
        firstNameField.setCustomValidity('I need your first name!');
    }
    else {
        firstNameField.classList.add('valid');
        firstNameField.classList.remove('invalid');
        firstNameField.setCustomValidity('');
    }
})

lastNameField.addEventListener('input', () => {
    if (lastNameField.validity.valueMissing) {
        lastNameField.classList.add('invalid');
        lastNameField.classList.remove('valid');
        lastNameField.setCustomValidity('I need your last name!');
    }
    else {
        lastNameField.classList.add('valid');
        lastNameField.classList.remove('invalid');
        lastNameField.setCustomValidity('');
    }
})

// Password field validation

passwordField.onkeyup = function() {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if (!passwordField.value.match(lowerCaseLetters) || !passwordField.value.match(upperCaseLetters) || !passwordField.value.match(numbers) || !passwordField.value.length >= 8) {
      passwordField.classList.add("invalid");
      passwordField.classList.remove("valid");
      passwordField.setCustomValidity('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    } else if (passwordField.value.match(lowerCaseLetters) && passwordField.value.match(upperCaseLetters) && passwordField.value.match(numbers) && passwordField.value.length >= 8) {
      passwordField.classList.add("valid");
      passwordField.classList.remove("invalid");
      passwordField.setCustomValidity('')
  }
}

repPasswordField.onkeyup = function() {
    // Validate lowercase letters
    let password = passwordField.value;

    if (repPasswordField.value !== password) {
      repPasswordField.classList.add("invalid");
      repPasswordField.classList.remove("valid");
      repPasswordField.setCustomValidity('Password has to be the same as before!')
    } else {
      repPasswordField.classList.add("valid");
      repPasswordField.classList.remove("invalid");
      repPasswordField.setCustomValidity('');
  }
}

// Zip Code

function checkZIP() {
    // Define the pattern of each country zip code
    const constraints = {
        AR: [
            "^(AR-)?\\d{4}$",
            "Argentina ZIP codes have 4 digits: e.g. AR-1234 or 1234"
        ],
        BR: [
            "^(BR-)?\\d{5}$",
            "Brazil ZIP codes have 5 digits: e.g. BR-12345 or 12345"
        ],
        CO: [
            "^(CO-)?\\d{6}$",
            "Colombia ZIP codes have 6 digits: e.g. CO-123456 or 123456"
        ],
        EC: [
            "^(EC-)?\\d{6}$",
            "Ecuador ZIP codes have 6 digits: e.g. EC-123456 or 123456"
        ],
        PY: [
            "^(PY-)?\\d{4}$",
            "Paraguay ZIP codes have 4 digits: e.g. PY-1234 or 1234"
        ],
        PE: [
            "^(PE-)?\\d{4}$",
            "Peru ZIP codes have 4 digits: e.g. PE-1234 or 1234"
        ],
        UY: [
            "^(UY-)?\\d{5}$",
            "Uruguay ZIP codes have 5 digits: e.g. UY-12345 or 12345"
        ],
        VE: [
            "^(VE-)?\\d{4}$",
            "Venezuela ZIP codes have 4 digits: e.g. VE-1234 or 1234"
        ],
    };

    const country = countryField.value;
    const zipCodeField = document.getElementById('zip-code');

    const constraint = new RegExp(constraints[countryField][0]);
    console.log(constraint);

    if (constraint.test(zipCodeField.value)) {
        zipCodeField.setCustomValidity("");
    }
    else {
        zipCodeField.setCustomValidity(constraint[country][1]);
    }
}

zipCodeField.addEventListener('input', () => {

})
