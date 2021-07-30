// These arrays have the purpose of being used to generate the password
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '?', '<', '>', '/', '-', '_', '+', '=', '`', '~'];

const generatePasswordBtn = document.querySelector('.generate-password');
const passwordField = document.querySelector('.password-result');

// Checkboxes
const capsBox = document.getElementById('caps');
const numbersBox = document.getElementById('numbers');
const symbolsBox = document.getElementById('symbols');

// Get random element from array
const GetRandomElement = array => {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement; 
}

// Function that generates the password
const GeneratePassword = (length, array) => {
    const password = [];

    for (let i = 0; i < length; i++) {
        const character = GetRandomElement(array);
        password.push(character);
    }

    return password.join('');
}

// Generate the password
generatePasswordBtn.addEventListener('click', () => {
    const passwordLengthInput = document.querySelector('.password-length');
    const passwordLength = passwordLengthInput.value;
    const chars = [];
    chars.push(...lowercase);

    if (capsBox.checked) {
        chars.push(...caps);
    }
    if (numbersBox.checked) {
        chars.push(...numbers);
    }
    if (symbolsBox.checked) {
        chars.push(...symbols);
    }
    
    const password = GeneratePassword(passwordLength, chars);
    
    passwordField.textContent = password;
});


// Copy to clipboard button
const copyBtn = document.querySelector('.copy-password');

copyBtn.addEventListener('click', () => {
    passwordField.focus();
    passwordField.select();
    document.execCommand("copy");
});